const jp225Trades = [
    { date: 'June 9', pnl: 17 }, { date: 'June 9', pnl: 12 },
    { date: 'June 11', pnl: -15 }, { date: 'June 15', pnl: 9 }, { date: 'June 17', pnl: 13 },
    { date: 'June 17', pnl: 9.5 }, { date: 'June 17', pnl: 5 }, { date: 'June 17', pnl: 4 },
    { date: 'June 18', pnl: 22 }, { date: 'June 18', pnl: 4 }, { date: 'June 19', pnl: -18.23 },
    { date: 'June 20', pnl: 20 }, { date: 'June 20', pnl: -10 }, { date: 'June 25', pnl: 15 },
    { date: 'June 25', pnl: 10 }, { date: 'June 26', pnl: -15 }, { date: 'June 29', pnl: 15 },
    { date: 'June 29', pnl: 10 }, { date: 'June 30', pnl: -17 },
    { date: 'July 2', pnl: 15 }, { date: 'July 2', pnl: -8 }, { date: 'July 3', pnl: -13 },
    { date: 'July 6', pnl: 18 }, { date: 'July 6', pnl: -9 }, { date: 'July 7', pnl: -12 },
    { date: 'July 8', pnl: -15 }, { date: 'July 9', pnl: -16.5 }, { date: 'July 10', pnl: 20 },
    { date: 'July 10', pnl: -10 }, { date: 'July 14', pnl: 12 }, { date: 'July 14', pnl: -15 },
    { date: 'July 15', pnl: 21 }, { date: 'July 15', pnl: 6 },
    { date: 'July 16', pnl: -15 }, { date: 'July 17', pnl: 20 }, { date: 'July 17', pnl: 4 },
    { date: 'July 17', pnl: 4 }, { date: 'July 17', pnl: -2 }, { date: 'July 21', pnl: 20 },
    { date: 'July 21', pnl: -5 }, { date: 'July 23', pnl: 18 },
    { date: 'July 23', pnl: 2 }, { date: 'July 24', pnl: 4 }, { date: 'July 28', pnl: 16 },
    { date: 'July 28', pnl: 5 }, { date: 'July 29', pnl: 21 }, { date: 'July 30', pnl: 7 }
];

const goldTrades = [
    // Aapki Gold trades yahan aayengi (Example dummy trade niche diya hai, aap delete kar sakte ho)
    // { date: 'Aug 1', pnl: 10 },
    // { date: 'Aug 2', pnl: -5 }
];

function initDashboard(rawTrades, containerId, chartId, symbolStr, startingBalance, subtitleText) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Enrich data
    const tradesData = [...rawTrades].reverse().map(trade => {
        return {
            date: trade.date,
            symbol: symbolStr,
            type: trade.pnl >= 0 ? 'buy' : 'sell',
            lots: 1,
            pnl: trade.pnl
        };
    });

    // 1. Render History
    const historyList = container.querySelector('.history-list');
    if (rawTrades.length === 0) {
        historyList.innerHTML = '<div style="text-align:center; padding: 20px; color: var(--text-muted);">No trades data yet</div>';
    } else {
        const grouped = tradesData.reduce((acc, trade) => {
            if (!acc[trade.date]) acc[trade.date] = [];
            acc[trade.date].push(trade);
            return acc;
        }, {});

        let html = '';
        for (const [date, trades] of Object.entries(grouped)) {
            html += `<div class="date-group"><div class="date-header">${date}</div>`;
            trades.forEach(trade => {
                const pnlClass = trade.pnl >= 0 ? 'positive' : 'negative';
                const pnlSign = trade.pnl >= 0 ? '+' : '';
                const typeIcon = trade.type === 'buy' ? '↗' : '↘';
                
                html += `
                    <div class="trade-item">
                        <div class="trade-info">
                            <div class="symbol-icon">${symbolStr === 'XAUUSD' ? '🥇' : '🇯🇵'}</div>
                            <div class="trade-details">
                                <div class="trade-symbol">${trade.symbol}</div>
                                <div class="trade-meta ${trade.type}">
                                    <span class="arrow">${typeIcon}</span> ${trade.lots} Unit(s)
                                </div>
                            </div>
                        </div>
                        <div class="trade-pnl ${pnlClass}">
                            ${pnlSign}$${Math.abs(trade.pnl).toFixed(2)}
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }
        historyList.innerHTML = html;
    }

    // 2. Calculate Metrics
    let balance = startingBalance;
    let peakBalance = startingBalance;
    let maxDrawdownMoney = 0;
    let wins = 0;
    let losses = 0;
    const dailyEquity = {};
    dailyEquity['Start'] = startingBalance;

    rawTrades.forEach(trade => {
        balance += trade.pnl;
        if (trade.pnl > 0) wins++;
        if (trade.pnl < 0) losses++;
        if (balance > peakBalance) peakBalance = balance;
        let drawdown = peakBalance - balance;
        if (drawdown > maxDrawdownMoney) maxDrawdownMoney = drawdown;
        dailyEquity[trade.date] = balance;
    });

    const totalTrades = wins + losses;
    const winRate = totalTrades > 0 ? ((wins / totalTrades) * 100).toFixed(1) : 0;
    const totalPnl = balance - startingBalance;
    const pnlPercentage = ((totalPnl / startingBalance) * 100).toFixed(1);
    const maxDrawdownPercentage = ((maxDrawdownMoney / peakBalance) * 100).toFixed(2);

    // Update UI DOM Elements
    const pnlValElem = container.querySelector('.pnl-card .value');
    pnlValElem.innerText = (totalPnl >= 0 ? '+$' : '-$') + Math.abs(totalPnl).toFixed(2);
    pnlValElem.className = 'value ' + (totalPnl >= 0 ? 'positive' : 'negative');
    container.querySelector('.pnl-card .subtitle').innerText = (totalPnl >= 0 ? '+' : '') + pnlPercentage + '%';

    container.querySelector('.winrate-card .value').innerText = winRate + '%';
    container.querySelector('.winrate-card .subtitle').innerText = `${wins} Wins / ${losses} Losses`;

    container.querySelector('.dd-card .value').innerText = '-' + maxDrawdownPercentage + '%';
    container.querySelector('.dd-card .subtitle').innerText = '-$' + maxDrawdownMoney.toFixed(2);

    container.querySelector('.trades-card .value').innerText = totalTrades;
    container.querySelector('.trades-card .subtitle').innerText = subtitleText;

    container.querySelector('.current-equity').innerText = 'Current: $' + balance.toFixed(2);

    // Update Account Balance header (only do this for JP225 by default, or dynamic later)
    if (containerId === 'trades-section') {
        document.querySelector('.balance-value').innerText = '$' + balance.toFixed(2);
    }

    // 3. Init Chart
    if (rawTrades.length > 0) {
        const ctx = document.getElementById(chartId).getContext('2d');
        const labels = Object.keys(dailyEquity);
        const equityData = Object.values(dailyEquity);

        let gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, symbolStr === 'XAUUSD' ? 'rgba(255, 215, 0, 0.4)' : 'rgba(0, 176, 255, 0.4)');
        gradient.addColorStop(1, symbolStr === 'XAUUSD' ? 'rgba(255, 215, 0, 0.0)' : 'rgba(0, 176, 255, 0.0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Account Equity (USD)',
                    data: equityData,
                    borderColor: symbolStr === 'XAUUSD' ? '#ffd700' : '#00b0ff',
                    backgroundColor: gradient,
                    borderWidth: 2,
                    pointBackgroundColor: symbolStr === 'XAUUSD' ? '#ffd700' : '#00b0ff',
                    pointBorderColor: '#1a1f2b',
                    pointRadius: 3,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#151a22',
                        titleColor: '#fff',
                        bodyColor: symbolStr === 'XAUUSD' ? '#ffd700' : '#00b0ff',
                        borderColor: '#2a2f3a',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) { return ' $' + context.parsed.y.toFixed(2); }
                        }
                    }
                },
                scales: {
                    y: {
                        display: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                        ticks: { color: '#8b92a5', callback: function(value) { return '$' + value; } }
                    },
                    x: {
                        grid: { display: false, drawBorder: false },
                        ticks: { color: '#8b92a5', maxTicksLimit: 12 }
                    }
                },
                interaction: { mode: 'nearest', axis: 'x', intersect: false }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize JP225 Dashboard
    initDashboard(jp225Trades, 'trades-section', 'equityChart', 'JP225Cash#', 500, 'June & July 2026');
    
    // 2. Initialize Gold (XAUUSD) Dashboard
    initDashboard(goldTrades, 'gold-section', 'goldChart', 'XAUUSD', 500, 'Coming Soon');
});
