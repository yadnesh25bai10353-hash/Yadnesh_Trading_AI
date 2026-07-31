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
    { date: 'Jul 31', pnl: 3.91 }, { date: 'Jul 31', pnl: 2.76 }, { date: 'Jul 31', pnl: 2.40 },
    { date: 'Jul 31', pnl: 1.35 }, { date: 'Jul 31', pnl: 0.68 }, { date: 'Jul 31', pnl: 1.46 }, { date: 'Jul 31', pnl: 1.69 }, { date: 'Jul 31', pnl: 1.14 }, { date: 'Jul 31', pnl: 2.59 }, { date: 'Jul 31', pnl: 1.10 }, { date: 'Jul 31', pnl: 0.95 }, { date: 'Jul 31', pnl: -3.31 }, { date: 'Jul 31', pnl: -3.26 },
    { date: 'Aug 1', pnl: -3.23 }, { date: 'Aug 1', pnl: 1.78 }, { date: 'Aug 1', pnl: 0.54 }, { date: 'Aug 1', pnl: 3.28 }, { date: 'Aug 1', pnl: 0.81 }, { date: 'Aug 1', pnl: -3.11 }, { date: 'Aug 1', pnl: 1.15 }, { date: 'Aug 1', pnl: 2.67 }, { date: 'Aug 1', pnl: 1.38 }, { date: 'Aug 1', pnl: 3.75 }, { date: 'Aug 1', pnl: 1.71 }, { date: 'Aug 1', pnl: 2.55 }, { date: 'Aug 1', pnl: 0.42 }, { date: 'Aug 1', pnl: 1.55 }, { date: 'Aug 1', pnl: 1.69 }, { date: 'Aug 1', pnl: 1.27 }, { date: 'Aug 1', pnl: 2.54 }, { date: 'Aug 1', pnl: 3.80 },
    { date: 'Aug 1', pnl: 8.79 }, { date: 'Aug 1', pnl: 2.70 }
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

// Spotlight Hover Effect for Premium Look
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.metric-card, .price-card, .trade-item, .contact-item, .analysis-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// --- Deep Analysis Feature ---
let analysisState = {
    level: 0, // 0: Models, 1: Months, 2: Weeks, 3: Days, 4: Report
    modelName: '',
    data: [], // All trades for selected model
    month: '',
    week: '',
    day: ''
};

function renderAnalysisLevel(level, param = null, data = null) {
    const content = document.getElementById('analysis-content');
    const title = document.getElementById('analysis-title');
    const subtitle = document.getElementById('analysis-subtitle');
    const breadcrumbs = document.getElementById('analysis-breadcrumbs');
    
    analysisState.level = level;
    
    // Helper to calculate stats
    const calcStats = (trades) => {
        let pnl = 0, wins = 0, losses = 0;
        trades.forEach(t => {
            pnl += t.pnl;
            if(t.pnl >= 0) wins++; else losses++;
        });
        const winrate = trades.length > 0 ? ((wins/trades.length)*100).toFixed(1) : 0;
        return { pnl, wins, losses, winrate, total: trades.length };
    };

    if (level === 0) {
        // Model Selection
        title.innerText = "Select Trading Model";
        subtitle.innerText = "Choose a model to dive deep into performance analytics";
        breadcrumbs.innerHTML = `<span class="crumb active" onclick="renderAnalysisLevel(0)">Deep Analysis</span>`;
        
        content.innerHTML = `
            <div class="analysis-card" onclick="renderAnalysisLevel(1, 'JP225_V4', jp225Trades)">
                <div class="card-icon" style="font-size: 40px; margin-bottom: 15px;">📈</div>
                <h3>JP225_V4 Model</h3>
                <div class="stat-row"><span>Total Trades</span><span class="stat-val">${jp225Trades.length}</span></div>
            </div>
            <div class="analysis-card" onclick="renderAnalysisLevel(1, 'Gold_V2', goldTrades)">
                <div class="card-icon" style="font-size: 40px; margin-bottom: 15px;">🏆</div>
                <h3>Gold_V2 Model</h3>
                <div class="stat-row"><span>Total Trades</span><span class="stat-val">${goldTrades.length}</span></div>
            </div>
        `;
    } 
    else if (level === 1) {
        // Month Selection
        if(param) { analysisState.modelName = param; analysisState.data = data; }
        
        title.innerText = "Monthly Analysis";
        subtitle.innerText = `Select a month for ${analysisState.modelName}`;
        breadcrumbs.innerHTML = `
            <span class="crumb" onclick="renderAnalysisLevel(0)">Deep Analysis</span>
            <span class="crumb active" onclick="renderAnalysisLevel(1)">${analysisState.modelName}</span>
        `;
        
        // Group by Month
        const months = {};
        analysisState.data.forEach(t => {
            const m = t.date.split(' ')[0];
            if(!months[m]) months[m] = [];
            months[m].push(t);
        });
        
        let html = '';
        for(let m in months) {
            const stats = calcStats(months[m]);
            const pClass = stats.pnl >= 0 ? 'positive' : 'negative';
            const pSign = stats.pnl >= 0 ? '+' : '';
            html += `
                <div class="analysis-card" onclick="renderAnalysisLevel(2, '${m}')">
                    <h3>${m} 2026</h3>
                    <div class="stat-row"><span>Net PnL</span><span class="stat-val ${pClass}">${pSign}$${Math.abs(stats.pnl).toFixed(2)}</span></div>
                    <div class="stat-row"><span>Win Rate</span><span class="stat-val">${stats.winrate}%</span></div>
                    <div class="stat-row"><span>Total Trades</span><span class="stat-val">${stats.total}</span></div>
                </div>
            `;
        }
        content.innerHTML = html;
    }
    else if (level === 2) {
        // Week Selection
        if(param) analysisState.month = param;
        
        title.innerText = "Weekly Analysis";
        subtitle.innerText = `Performance breakdown for ${analysisState.month} 2026`;
        breadcrumbs.innerHTML = `
            <span class="crumb" onclick="renderAnalysisLevel(0)">Deep Analysis</span>
            <span class="crumb" onclick="renderAnalysisLevel(1)">${analysisState.modelName}</span>
            <span class="crumb active" onclick="renderAnalysisLevel(2)">${analysisState.month}</span>
        `;
        
        const monthTrades = analysisState.data.filter(t => t.date.startsWith(analysisState.month));
        const weeks = { 'Week 1':[], 'Week 2':[], 'Week 3':[], 'Week 4':[], 'Week 5':[] };
        monthTrades.forEach(t => {
            const d = parseInt(t.date.split(' ')[1]);
            let w = 'Week 1';
            if (d > 7 && d <= 14) w = 'Week 2';
            else if (d > 14 && d <= 21) w = 'Week 3';
            else if (d > 21 && d <= 28) w = 'Week 4';
            else if (d > 28) w = 'Week 5';
            weeks[w].push(t);
        });
        
        let html = '';
        for(let w in weeks) {
            if(weeks[w].length === 0) continue;
            const stats = calcStats(weeks[w]);
            const pClass = stats.pnl >= 0 ? 'positive' : 'negative';
            const pSign = stats.pnl >= 0 ? '+' : '';
            html += `
                <div class="analysis-card" onclick="renderAnalysisLevel(3, '${w}')">
                    <h3>${w}</h3>
                    <div class="stat-row"><span>Net PnL</span><span class="stat-val ${pClass}">${pSign}$${Math.abs(stats.pnl).toFixed(2)}</span></div>
                    <div class="stat-row"><span>Win Rate</span><span class="stat-val">${stats.winrate}%</span></div>
                    <div class="stat-row"><span>Total Trades</span><span class="stat-val">${stats.total}</span></div>
                </div>
            `;
        }
        content.innerHTML = html;
    }
    else if (level === 3) {
        // Day Selection
        if(param) analysisState.week = param;
        
        title.innerText = "Daily Analysis";
        subtitle.innerText = `Select a specific date in ${analysisState.week}`;
        breadcrumbs.innerHTML = `
            <span class="crumb" onclick="renderAnalysisLevel(0)">Deep Analysis</span>
            <span class="crumb" onclick="renderAnalysisLevel(1)">${analysisState.modelName}</span>
            <span class="crumb" onclick="renderAnalysisLevel(2)">${analysisState.month}</span>
            <span class="crumb active" onclick="renderAnalysisLevel(3)">${analysisState.week}</span>
        `;
        
        const monthTrades = analysisState.data.filter(t => t.date.startsWith(analysisState.month));
        const weekTrades = monthTrades.filter(t => {
            const d = parseInt(t.date.split(' ')[1]);
            let w = 'Week 1';
            if (d > 7 && d <= 14) w = 'Week 2';
            else if (d > 14 && d <= 21) w = 'Week 3';
            else if (d > 21 && d <= 28) w = 'Week 4';
            else if (d > 28) w = 'Week 5';
            return w === analysisState.week;
        });
        
        const days = {};
        weekTrades.forEach(t => {
            if(!days[t.date]) days[t.date] = [];
            days[t.date].push(t);
        });
        
        let html = '';
        for(let d in days) {
            const stats = calcStats(days[d]);
            const pClass = stats.pnl >= 0 ? 'positive' : 'negative';
            const pSign = stats.pnl >= 0 ? '+' : '';
            html += `
                <div class="analysis-card" onclick="renderAnalysisLevel(4, '${d}')">
                    <h3>${d}</h3>
                    <div class="stat-row"><span>Net PnL</span><span class="stat-val ${pClass}">${pSign}$${Math.abs(stats.pnl).toFixed(2)}</span></div>
                    <div class="stat-row"><span>Win Rate</span><span class="stat-val">${stats.winrate}%</span></div>
                    <div class="stat-row"><span>Total Trades</span><span class="stat-val">${stats.total}</span></div>
                </div>
            `;
        }
        content.innerHTML = html;
    }
    else if (level === 4) {
        // Daily Report
        if(param) analysisState.day = param;
        
        title.innerText = `Report: ${analysisState.day}`;
        subtitle.innerText = `Detailed trade history for the day`;
        breadcrumbs.innerHTML = `
            <span class="crumb" onclick="renderAnalysisLevel(0)">Deep Analysis</span>
            <span class="crumb" onclick="renderAnalysisLevel(1)">${analysisState.modelName}</span>
            <span class="crumb" onclick="renderAnalysisLevel(2)">${analysisState.month}</span>
            <span class="crumb" onclick="renderAnalysisLevel(3)">${analysisState.week}</span>
            <span class="crumb active">${analysisState.day}</span>
        `;
        
        const dayTrades = analysisState.data.filter(t => t.date === analysisState.day);
        const stats = calcStats(dayTrades);
        
        let html = `
            <div class="analysis-card" style="grid-column: 1 / -1; cursor: default; transform: none;">
                <h3>Summary for ${analysisState.day}</h3>
                <div class="stat-row"><span>Net PnL</span><span class="stat-val ${stats.pnl >= 0 ? 'positive':'negative'}">$${Math.abs(stats.pnl).toFixed(2)}</span></div>
                <div class="stat-row"><span>Win Rate</span><span class="stat-val">${stats.winrate}% (${stats.wins}W / ${stats.losses}L)</span></div>
                <hr style="border: 1px solid rgba(255,255,255,0.05); margin: 20px 0;">
                <h4 style="text-align: left; margin-bottom: 15px;">All Trades:</h4>
        `;
        
        dayTrades.forEach(t => {
            const pClass = t.pnl >= 0 ? 'positive' : 'negative';
            const pSign = t.pnl >= 0 ? '+' : '';
            html += `
                <div class="trade-item" style="margin-bottom: 8px; padding: 12px 20px;">
                    <div class="trade-info">
                        <span style="font-weight: 600;">${analysisState.modelName === 'Gold_V2' ? '🥇 XAUUSD' : '📈 JP225'}</span>
                    </div>
                    <div class="trade-pnl ${pClass}" style="font-size: 16px;">
                        ${pSign}$${Math.abs(t.pnl).toFixed(2)}
                    </div>
                </div>
            `;
        });
        html += `</div>`;
        content.innerHTML = html;
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderAnalysisLevel(0);
});
