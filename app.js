window.dashboardData = {
    'trades-section': { balance: '$500.00', date: '' },
    'gold-section': { balance: '$500.00', date: '' }
};

const jp225Trades = [
    { date: 'Jun 9', pnl: 17 }, { date: 'Jun 9', pnl: 12 },
    { date: 'Jun 11', pnl: -15 }, { date: 'Jun 15', pnl: 9 }, { date: 'Jun 17', pnl: 13 },
    { date: 'Jun 17', pnl: 9.5 }, { date: 'Jun 17', pnl: 5 }, { date: 'Jun 17', pnl: 4 },
    { date: 'Jun 18', pnl: 22 }, { date: 'Jun 18', pnl: 4 }, { date: 'Jun 19', pnl: -18.23 },
    { date: 'Jun 20', pnl: 20 }, { date: 'Jun 20', pnl: -10 }, { date: 'Jun 25', pnl: 15 },
    { date: 'Jun 25', pnl: 10 }, { date: 'Jun 26', pnl: -15 }, { date: 'Jun 29', pnl: 15 },
    { date: 'Jun 29', pnl: 10 }, { date: 'Jun 30', pnl: -17 },
    { date: 'Jul 2', pnl: 15 }, { date: 'Jul 2', pnl: -8 }, { date: 'Jul 3', pnl: -13 },
    { date: 'Jul 6', pnl: 18 }, { date: 'Jul 6', pnl: -9 }, { date: 'Jul 7', pnl: -12 },
    { date: 'Jul 8', pnl: -15 }, { date: 'Jul 9', pnl: -16.5 }, { date: 'Jul 10', pnl: 20 },
    { date: 'Jul 10', pnl: -10 }, { date: 'Jul 14', pnl: 12 }, { date: 'Jul 14', pnl: -15 },
    { date: 'Jul 15', pnl: 21 }, { date: 'Jul 15', pnl: 6 },
    { date: 'Jul 16', pnl: -15 }, { date: 'Jul 17', pnl: 20 }, { date: 'Jul 17', pnl: 4 },
    { date: 'Jul 17', pnl: 4 }, { date: 'Jul 17', pnl: -2 }, { date: 'Jul 21', pnl: 20 },
    { date: 'Jul 21', pnl: -5 }, { date: 'Jul 23', pnl: 18 },
    { date: 'Jul 23', pnl: 2 }, { date: 'Jul 24', pnl: 4 }, { date: 'Jul 28', pnl: 16 },
    { date: 'Jul 28', pnl: 5 }, { date: 'Jul 29', pnl: 21 }, { date: 'Jul 30', pnl: 7 }
];

const goldTrades = [
    { date: 'Jul 27', pnl: 1.72 }, { date: 'Jul 27', pnl: -3.51 }, { date: 'Jul 27', pnl: -3.34 }, { date: 'Jul 27', pnl: 1.76 }, { date: 'Jul 27', pnl: 2.06 }, { date: 'Jul 27', pnl: 1.78 }, { date: 'Jul 27', pnl: 2.14 }, { date: 'Jul 27', pnl: 1.75 }, { date: 'Jul 27', pnl: 2.36 }, { date: 'Jul 27', pnl: 2.14 }, { date: 'Jul 27', pnl: 1.74 }, { date: 'Jul 27', pnl: -2.93 }, { date: 'Jul 27', pnl: -3.16 }, { date: 'Jul 27', pnl: 1.8 }, { date: 'Jul 27', pnl: -3.2 }, { date: 'Jul 27', pnl: -3.52 }, { date: 'Jul 27', pnl: -3.27 }, { date: 'Jul 27', pnl: -3.53 }, { date: 'Jul 27', pnl: 1.93 }, { date: 'Jul 27', pnl: 1.85 }, { date: 'Jul 27', pnl: 1.48 }, { date: 'Jul 27', pnl: 2.1 }, { date: 'Jul 27', pnl: 0.34 }, { date: 'Jul 27', pnl: 1.84 }, { date: 'Jul 27', pnl: 1.77 }, { date: 'Jul 27', pnl: 1.99 }, { date: 'Jul 27', pnl: -3.23 }, { date: 'Jul 27', pnl: -3.26 }, { date: 'Jul 27', pnl: -3.03 }, { date: 'Jul 27', pnl: -3.42 }, { date: 'Jul 27', pnl: -3.3 }, { date: 'Jul 27', pnl: -3.52 }, { date: 'Jul 27', pnl: -3.49 }, { date: 'Jul 27', pnl: -3.37 }, { date: 'Jul 27', pnl: 2.06 }, { date: 'Jul 27', pnl: 4.88 }, { date: 'Jul 27', pnl: 1.84 }, { date: 'Jul 27', pnl: 2.39 }, { date: 'Jul 27', pnl: 3.46 }, { date: 'Jul 27', pnl: 1.82 }, { date: 'Jul 27', pnl: 2.29 }, { date: 'Jul 27', pnl: 1.55 }, { date: 'Jul 27', pnl: 1.79 }, { date: 'Jul 27', pnl: 2.02 }, { date: 'Jul 27', pnl: 1.49 }, { date: 'Jul 27', pnl: 1.65 }, { date: 'Jul 27', pnl: 1.74 }, { date: 'Jul 27', pnl: 1.75 }, { date: 'Jul 29', pnl: -3.32 }, { date: 'Jul 29', pnl: -3.34 }, { date: 'Jul 29', pnl: 3.32 }, { date: 'Jul 29', pnl: 1.63 }, { date: 'Jul 29', pnl: -2.91 }, { date: 'Jul 29', pnl: 2.75 }, { date: 'Jul 29', pnl: 0.33 }, { date: 'Jul 29', pnl: 2.24 }, { date: 'Jul 29', pnl: 2.96 }, { date: 'Jul 29', pnl: 1.25 }, { date: 'Jul 29', pnl: 3.66 }, { date: 'Jul 29', pnl: -3.29 }, { date: 'Jul 29', pnl: -3.58 }, { date: 'Jul 29', pnl: 0.71 }, { date: 'Jul 29', pnl: 1.23 }, { date: 'Jul 29', pnl: 1.07 }, { date: 'Jul 29', pnl: 3.43 }, { date: 'Jul 29', pnl: -3.36 }, { date: 'Jul 29', pnl: -3.25 }, { date: 'Jul 29', pnl: -3.36 }, { date: 'Jul 29', pnl: -3.24 }, { date: 'Jul 29', pnl: -3.26 }, { date: 'Jul 29', pnl: -3.23 }, { date: 'Jul 29', pnl: -3.35 }, { date: 'Jul 29', pnl: -3.27 }, { date: 'Jul 29', pnl: -3.24 }, { date: 'Jul 29', pnl: 3.78 }, { date: 'Jul 29', pnl: 2.27 }, { date: 'Jul 29', pnl: 1.81 }, { date: 'Jul 29', pnl: 1.79 }, { date: 'Jul 29', pnl: 4.29 }, { date: 'Jul 29', pnl: 1.76 }, { date: 'Jul 29', pnl: -3.43 }, { date: 'Jul 29', pnl: 2.61 }, { date: 'Jul 29', pnl: 2.89 }, { date: 'Jul 29', pnl: -3.32 }, { date: 'Jul 29', pnl: 2.83 }, { date: 'Jul 29', pnl: 2.59 }, { date: 'Jul 29', pnl: 0.82 }, { date: 'Jul 29', pnl: 1.04 }, { date: 'Jul 29', pnl: 3.44 }, { date: 'Jul 29', pnl: 1.47 }, { date: 'Jul 29', pnl: 3.84 }, { date: 'Jul 29', pnl: 2.95 }, { date: 'Jul 29', pnl: 2.05 }, { date: 'Jul 29', pnl: 1.48 }, { date: 'Jul 29', pnl: 1.61 }, { date: 'Jul 29', pnl: 1.58 }, { date: 'Jul 29', pnl: -3.29 }, { date: 'Jul 29', pnl: -3.33 }, { date: 'Jul 29', pnl: -3.44 }, { date: 'Jul 29', pnl: 2.8 }, { date: 'Jul 29', pnl: 2.29 }, { date: 'Jul 29', pnl: -3.27 }, { date: 'Jul 29', pnl: 3.83 }, { date: 'Jul 29', pnl: 3.13 }, { date: 'Jul 29', pnl: 1.5 }, { date: 'Jul 29', pnl: 1.1 }, { date: 'Jul 29', pnl: 1.31 }, { date: 'Jul 29', pnl: 1.68 }, { date: 'Jul 29', pnl: 2.15 }, { date: 'Jul 29', pnl: 0.73 }, { date: 'Jul 29', pnl: 3.78 }, { date: 'Jul 29', pnl: 3.82 }, { date: 'Jul 29', pnl: 3.78 },
    { date: 'Jul 30', pnl: -3.33 }, { date: 'Jul 30', pnl: 3.74 }, { date: 'Jul 30', pnl: 1.61 }, { date: 'Jul 30', pnl: 1.94 }, { date: 'Jul 30', pnl: -2.84 }, { date: 'Jul 30', pnl: 4.21 }, { date: 'Jul 30', pnl: 3.73 }, { date: 'Jul 30', pnl: 2.46 }, { date: 'Jul 30', pnl: -3.30 }, { date: 'Jul 30', pnl: 3.80 }, { date: 'Jul 30', pnl: 4.89 }, { date: 'Jul 30', pnl: -3.36 }, { date: 'Jul 30', pnl: -3.33 }, { date: 'Jul 30', pnl: 3.74 }, { date: 'Jul 30', pnl: 3.90 }, { date: 'Jul 30', pnl: 3.39 }, { date: 'Jul 30', pnl: 1.83 }, { date: 'Jul 30', pnl: -3.34 }, { date: 'Jul 30', pnl: -3.54 }, { date: 'Jul 30', pnl: -3.26 }, { date: 'Jul 30', pnl: -3.37 }, { date: 'Jul 30', pnl: -3.19 }, { date: 'Jul 30', pnl: 1.73 }, { date: 'Jul 30', pnl: 2.02 }, { date: 'Jul 30', pnl: 1.54 }, { date: 'Jul 30', pnl: -3.02 }, { date: 'Jul 30', pnl: -3.45 }, { date: 'Jul 30', pnl: 3.99 }, { date: 'Jul 30', pnl: -3.50 }, { date: 'Jul 30', pnl: -3.54 }, { date: 'Jul 30', pnl: -3.33 }, { date: 'Jul 30', pnl: -3.21 }, { date: 'Jul 30', pnl: 1.40 }, { date: 'Jul 30', pnl: 1.16 }, { date: 'Jul 30', pnl: 3.24 }, { date: 'Jul 30', pnl: 3.74 },
    { date: 'Jul 31', pnl: 3.91 }, { date: 'Jul 31', pnl: 2.76 }, { date: 'Jul 31', pnl: 2.40 }
];

function initDashboard(rawTrades, containerId, chartId, symbolStr, startingBalance) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Calculate dynamic date range
    let dateRangeStr = 'No Data';
    if (rawTrades.length > 0) {
        const firstTradeDate = rawTrades[0].date;
        const lastTradeDate = rawTrades[rawTrades.length - 1].date;
        dateRangeStr = `${firstTradeDate} - ${lastTradeDate}`;
    }

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

    // Update global state for Header
    window.dashboardData[containerId] = {
        balance: '$' + balance.toFixed(2),
        date: dateRangeStr
    };

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
    container.querySelector('.trades-card .subtitle').innerText = dateRangeStr;

    container.querySelector('.current-equity').innerText = 'Current: $' + balance.toFixed(2);

    // If this is the active tab on load, update header
    if (containerId === 'trades-section') {
        document.querySelector('.balance-value').innerText = window.dashboardData[containerId].balance;
        document.querySelector('.balance-date').innerText = window.dashboardData[containerId].date;
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
    initDashboard(jp225Trades, 'trades-section', 'equityChart', 'JP225Cash#', 500);
    
    // 2. Initialize Gold (XAUUSD) Dashboard
    initDashboard(goldTrades, 'gold-section', 'goldChart', 'XAUUSD', 500);
});
