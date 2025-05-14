// Sample KOL data
const kols = [
    {
        id: 4,
        name: "Cupsey",
        avatar: "./Cupsey.png",
        wallet: "suqh5sHtr8HyJ7q8scBimULPkPpA557prMG47xCHQfK",
        balance: "$669,016.4",
        buys: 12043,
        sells: 6023,
        trades: [
            { type: "Sell", token: "DALI", amount: "49m", price: "3.86 Sol" },
            { type: "Buy", token: "DALI", amount: "49m", price: "3.13 Sol" },
            { type: "Buy", token: "GODCOIN", amount: "6.19m", price: "1.13 Sol" },
            { type: "Buy", token: "GODCOIN", amount: "6.11m", price: "1.13 Sol" },
            { type: "Sell", token: "GODCOIN", amount: "14m", price: "1.82 Sol" }
        ],
        mb: [
          'SOLCOMIC', 'DALI', 'GODCOIN', 'SolidCoin', 'HOLYSHIT', 'VAPORWARE'
        ]
    },
    {
        id: 5,
        name: "West",
        avatar: "./West.png",
        wallet: "JDd3hy3gQn2V982mi1zqhNqUw1GfV2UL6g76STojCJPN",
        balance: "$1,099,718.8",
        buys: 123043,
        sells: 98231,
        trades: [
            { type: "Buy", token: "FSM", amount: "304k", price: "0.120 Sol" },
            { type: "Sell", token: "MIKASA", amount: "53.2m", price: "2.02 Sol" },
            { type: "Buy", token: "MIKASA", amount: "1.96m", price: "0.12 Sol" },
            { type: "Buy", token: "BOTEGA", amount: "51.2m", price: "3.06 Sol" },
            { type: "Sell", token: "FSM", amount: "51.5m", price: "2.37 Sol" }
        ],
        mb: [
          'FSM', 'MIKASA', 'BOTEGA', 'GODCOIN', 'CASINO', 'RSC'
        ]
    },
    {
        id: 6,
        name: "Jaden",
        avatar: "./Jaden.png",
        wallet: "CqQKv6XdrMWrz3YuSwqTTcVoQK5eu4zNo3hps3M1Q3yo",
        balance: "$5,176.8",
        buys: 6123,
        sells: 5322,
        trades: [
            { type: "Buy", token: "PYUSD", amount: "30.9m", price: "1.16 Sol" },
            { type: "Sell", token: "GEORGE", amount: "52.4m", price: "2.02 Sol" },
            { type: "Buy", token: "GODCOIN", amount: "23.1m", price: "1.01 Sol" },
            { type: "Buy", token: "YMCA", amount: "29.3m", price: "1.16 Sol" },
            { type: "Sell", token: "ANIMEBTC", amount: "31.5m", price: "7.95 Sol" }
        ],
        mb: [
          'PYUSD', 'MIKASA', 'BOTEGA', 'GODCOIN', 'CASINO', 'RSC'
        ]
    },
    {
        id: 7,
        name: "Assasin.eth",
        avatar: "./Assasin.png",
        wallet: "6LChaYRYtEYjLEHhzo4HdEmgNwu2aia8CM8VhR9wn6n7",
        balance: "$631,743.7",
        buys: 67800,
        sells: 64233,
        trades: [
            { type: "Sell", token: "GODCOIN", amount: "4.9m", price: "0.744 Sol" },
            { type: "Buy", token: "GODCOIN", amount: "52.4m", price: "0.332 Sol" },
            { type: "Sell", token: "GODCOIN", amount: "23.1m", price: "3.01 Sol" },
            { type: "Buy", token: "GODCOIN", amount: "29.3m", price: "4.91 Sol" },
            { type: "Sell", token: "GODCOIN", amount: "31.5m", price: "0.529 Sol" }
        ],
        mb: [
          'PYUSD', 'GERALD', 'BOTEGA', 'GODCOIN', 'TICKER', 'RSC'
        ]
    }, 
    {
        id: 8,
        name: "dv",
        avatar: "./dv.png",
        wallet: "BCagckXeMChUKrHEd6fKFA1uiWDtcmCXMsqaheLiUPJd",
        balance: "$631,743.7",
        buys: 67800,
        sells: 64233,
        trades: [
            { type: "Sell", token: "MAGNOLIA", amount: "56.9m", price: "2.13 Sol" },
            { type: "Sell", token: "GODCOIN", amount: "56.2m", price: "2.05 Sol" },
            { type: "Buy", token: "GambleGod", amount: "23.1m", price: "3.01 Sol" },
            { type: "Buy", token: "GambleGod", amount: "29.3m", price: "2.45 Sol" },
            { type: "Sell", token: "amperela", amount: "31.5m", price: "1.59 Sol" }
        ],
        mb: [
          'GambleGod', 'MAGNOLIA', 'GambleGod', 'GODCOIN', 'amperela', 'RSC'
        ]
    },
    {
        id: 9,
        name: "Gh0stee",
        avatar: "./Gh0stee.png",
        wallet: "2kv8X2a9bxnBM8NKLc6BBTX2z13GFNRL4oRotMUJRva9",
        balance: "$8,245.4",
        buys: 67800,
        sells: 64233,
        trades: [
            { type: "Sell", token: "MAGNOLIA", amount: "1.47m", price: "2.13 Sol" },
            { type: "Buy", token: "MAGNOLIA", amount: "2.34m", price: "0.21 Sol" },
            { type: "Buy", token: "MAGNOLIA", amount: "23.1m", price: "5.01 Sol" },
            { type: "Sell", token: "EVENN", amount: "29.3m", price: "3.25 Sol" },
            { type: "Buy", token: "EVENN", amount: "31.5m", price: "1.34 Sol" }
        ],
        mb: [
          'EVENN', 'MAGNOLIA', 'SELDON', 'GODCOIN', 'amperela', 'RSC'
        ]
    },
    {
        id: 10,
        name: "Cented",
        avatar: "./Cented.png",
        wallet: "CyaE1VxvBrahnPWkqm5VsdCvyS2QmNht2UFrKJHga54o",
        balance: "$876,383.8",
        buys: 750,
        sells: 652,
        trades: [
            { type: "Sell", token: "Bizly", amount: "1.47m", price: "0.5 Sol" },
            { type: "Sell", token: "Bizly", amount: "2.34m", price: "0.81 Sol" },
            { type: "Sell", token: "Bizly", amount: "1.31m", price: "0.677 Sol" },
            { type: "Sell", token: "Bizly", amount: "2.03m", price: "1.1 Sol" },
            { type: "Sell", token: "Bizly", amount: "1.5m", price: "0.77 Sol" }
        ],
        mb: [
          'GHITRUMP', 'CAT', 'SELDON', 'BERUTOHOLD', 'CULT', 'RSC'
        ]
    },
    {
        id: 11,
        name: "Latuche",
        avatar: "./Latuche.png",
        wallet: "GJA1HEbxGnqBhBifH9uQauzXSB53to5rhDrzmKxhSU65",
        balance: "$28,594.2",
        buys: 179,
        sells: 154,
        trades: [
            { type: "Sell", token: "Bizly", amount: "19.47m", price: "1.5 Sol" },
            { type: "Buy", token: "Bizly", amount: "19.47m", price: "2.01 Sol" },
            { type: "Sell", token: "BOTEGA", amount: "44.6m", price: "2.22 Sol" },
            { type: "Buy", token: "BOTEGA", amount: "44.6m", price: "2.02 Sol" },
            { type: "Sell", token: "NOE", amount: "32.8m", price: "2.48 Sol" }
        ],
        mb: [
          'Bizly', 'BOTEGA', 'NOE', 'BERUTOHOLD', 'CULT', 'RSC'
        ]
    }
];
console.log(kols);
// Database interface
const db = {
  getComments: async function(kolId) {
    try {
      const response = await fetch(`get_comments.php?kol_id=${kolId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  },
  
  addComment: async function(kolId, commentText) {
    try {
      const response = await fetch('add_comment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          kol_id: kolId,
          text: commentText
        })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },
  
  addReaction: async function(commentId, reactionType) {
    try {
      const response = await fetch('add_reaction.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment_id: commentId,
          reaction_type: reactionType
        })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('Error adding reaction:', error);
      throw error;
    }
  }
};

// Display all KOLs on page load
document.addEventListener('DOMContentLoaded', function() {
    renderKOLs(kols);
});

async function addComment(kolId, inModal = false) {
    const selector = inModal ?
        `.modal-content .comment-input[data-kol-id="${kolId}"]` :
        `.comment-input[data-kol-id="${kolId}"]`;
  
    const input = document.querySelector(selector);
    const commentText = input?.value.trim();
  
    if (commentText) {
      try {
        const newComment = await db.addComment(kolId, commentText);
        
        if (inModal) {
          openProfile(kolId);
        } else {
          loadComments(kolId);
        }
  
        if (input) input.value = '';
      } catch (error) {
        console.error('Error adding comment:', error);
        showNotification('Failed to add comment', 'error');
      }
    }
  }

async function loadComments(kolId) {
    try {
      const comments = await db.getComments(kolId);
      const kolCard = document.querySelector(`.kol-card[data-kol-id="${kolId}"]`);
      
      if (kolCard) {
        const commentsSection = kolCard.querySelector('.comments-section');
        if (comments && comments.length > 0) {
          commentsSection.innerHTML = `
            <div class="comment-form">
              <input type="text" class="comment-input" placeholder="Add a bad comment..." data-kol-id="${kolId}">
              <button class="comment-submit" onclick="addComment(${kolId})">Post</button>
            </div>
            ${comments.slice(0, 2).map(comment => `
              <div class="comment" data-comment-id="${comment.id}">
                <p class="comment-text">${comment.text}</p>
                <div class="comment-reactions">
                  <div class="reaction" onclick="addReaction('${comment.id}', 'dislike')">
                    <i class="fas fa-thumbs-down action-icon dislike-icon"></i>
                    <span class="dislike-count">${comment.dislikes || 0}</span>
                  </div>
                  <div class="reaction" onclick="addReaction('${comment.id}', 'vomit')">
                    <i class="fas fa-skull action-icon vomit-icon"></i>
                    <span class="vomit-count">${comment.vomits || 0}</span>
                  </div>
                </div>
              </div>
            `).join('')}
            ${comments.length > 2 ? `
              <div class="view-all">
                <button class="view-all-btn" onclick="openProfile(${kolId})">View all ${comments.length} comments</button>
              </div>
            ` : ''}
          `;
        } else {
          commentsSection.querySelector('.no-comments').textContent = 'No comments yet. Be the first to roast!';
        }
      }
    } catch (error) {
      console.error('Error loading comments:', error);
      const commentsSection = document.querySelector(`.kol-card[data-kol-id="${kolId}"] .comments-section`);
      if (commentsSection) {
        commentsSection.querySelector('.no-comments').textContent = 'Error loading comments';
      }
    }
  }

// Render KOL cards
function renderKOLs(kolList) {
  const kolGrid = document.getElementById('kolGrid');
  kolGrid.innerHTML = '';

  kolList.forEach(kol => {
    // Убедимся, что trades существует и является массивом
    const trades = Array.isArray(kol.trades) ? kol.trades : [];
    
    const kolCard = document.createElement('div');
    kolCard.className = 'kol-card';
    kolCard.dataset.kolId = kol.id;
    
    // Формируем HTML для trades с проверкой каждого поля
    const tradesHTML = trades.length > 0 ? `
      <div class="trades-container">
        <div class="trade-header">
          <div>Type</div>
          <div>Token</div>
          <div>Amount</div>
          <div>Price</div>
        </div>
        ${trades.slice(0, 3).map(trade => `
          <div class="trade-row trade-${(trade.type || 'unknown').toLowerCase()}">
            <div><span class="trade-type">${trade.type || 'N/A'}</span></div>
            <div>${trade.token || 'N/A'}</div>
            <div>${trade.amount || 'N/A'}</div>
            <div>${trade.price || 'N/A'}</div>
          </div>
        `).join('')}
      </div>
    ` : '<div class="no-trades">No trades yet</div>';

    kolCard.innerHTML = `
      <div class="kol-header" onclick="openProfile(${kol.id})">
        <img src="${kol.avatar || 'default-avatar.png'}" alt="${kol.name}" class="kol-avatar">
        <div class="kol-info">
          <h3 class="kol-name">${kol.name}</h3>
          <div class="kol-wallet">${kol.wallet}</div>
        </div>
      </div>

      <div class="kol-stats" onclick="openProfile(${kol.id})">
        <div class="stat">
          <div class="stat-value">${kol.balance || '$0'}</div>
          <div class="stat-label">Balance</div>
        </div>
        <div class="stat">
          <div class="stat-value">${kol.buys || 0}</div>
          <div class="stat-label">Buys</div>
        </div>
        <div class="stat">
          <div class="stat-value">${kol.sells || 0}</div>
          <div class="stat-label">Sells</div>
        </div>
      </div>

      <div class="kol-actions">
        <button class="action-btn" title="Copy Wallet" onclick="event.stopPropagation(); copyToClipboard('${kol.wallet}')">
          <i class="fas fa-wallet action-icon wallet-icon"></i>
        </button>
        <button class="action-btn" title="Copy CA" onclick="event.stopPropagation(); copyToClipboard('${kol.wallet}')">
          <i class="fas fa-copy action-icon copy-icon"></i>
        </button>
      </div>

      ${tradesHTML}

      <div class="comments-section">
        <div class="comment-form">
          <input type="text" class="comment-input" placeholder="Add a bad comment..." data-kol-id="${kol.id}">
          <button class="comment-submit" onclick="addComment(${kol.id})">Post</button>
        </div>
        <div class="no-comments">Loading comments...</div>
      </div>
    `;
    kolGrid.appendChild(kolCard);
    loadComments(kol.id);
  });
}

async function loadInitialData() {
  try {
    const response = await fetch('get_transactions.php');
    const transactions = await response.json();
    
    // Проверяем что получили массив
    if (!Array.isArray(transactions)) {
      throw new Error('Invalid transactions data');
    }
    
    // Группируем транзакции по KOL
    const transactionsByKol = {};
    transactions.forEach(tx => {
      if (!tx || !tx.kol_id) return;
      
      if (!transactionsByKol[tx.kol_id]) {
        transactionsByKol[tx.kol_id] = [];
      }
      transactionsByKol[tx.kol_id].push({
        type: tx.transaction_type || 'Unknown',
        token: tx.token || 'Unknown',
        amount: tx.amount || '0',
        price: tx.price || '0 Sol'
      });
    });
    
    // Обновляем данные KOL
    kols.forEach(kol => {
      kol.trades = transactionsByKol[kol.id] || [];
    });
    
    renderKOLs(kols);
  } catch (error) {
    console.error('Error loading transactions:', error);
    // Инициализируем trades для всех KOLs
    kols.forEach(kol => {
      kol.trades = kol.trades || [];
    });
    renderKOLs(kols);
  }
}

// Search KOLs
function searchKOLs() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredKOLs = kols.filter(kol =>
      kol.name.toLowerCase().includes(searchTerm) ||
      kol.wallet.toLowerCase().includes(searchTerm)
  );
  renderKOLs(filteredKOLs);
}

// Open KOL profile
async function openProfile(kolId) {
  const kol = kols.find(k => k.id === kolId);
  if (!kol) {
    alert('KOL not found!');
    return;
  }

  const comments = await db.getComments(kolId);

  const modalContent = document.getElementById('modalContent');

  modalContent.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${kol.name}</h3>
      <button class="close-modal" onclick="closeModal()"><i class="fas fa-times"></i></button>
    </div>
    
    <div class="kol-header">
      <img src="${kol.avatar}" alt="${kol.name}" class="kol-avatar">
      <div class="kol-info">
        <h3 class="kol-name">${kol.name}</h3>
        <div class="kol-wallet">${kol.wallet}</div>
      </div>
    </div>
    
    <div class="kol-stats">
      <div class="stat">
        <div class="stat-value">${kol.balance}</div>
        <div class="stat-label">Balance</div>
      </div>
      <div class="stat">
        <div class="stat-value">${kol.buys}</div>
        <div class="stat-label">Buys</div>
      </div>
      <div class="stat">
        <div class="stat-value">${kol.sells}</div>
        <div class="stat-label">Sells</div>
      </div>
    </div>
    
    <div class="kol-actions">
      <button class="action-btn" title="Copy Wallet" onclick="copyToClipboard('${kol.wallet}')">
        <i class="fas fa-wallet action-icon"></i>
      </button>
      <button class="action-btn" title="View on Explorer" onclick="window.open('https://solscan.io/account/${kol.wallet}', '_blank')">
        <i class="fas fa-external-link-alt action-icon"></i>
      </button>
    </div>
    
    <div class="trades-container">
      <div class="trade-header">
        <div>Type</div>
        <div>Token</div>
        <div>Amount</div>
        <div>Price</div>
      </div>
      ${kol.trades.map(trade => `
        <div class="trade-row trade-${trade.type.toLowerCase()}">
          <div><span class="trade-type">${trade.type}</span></div>
          <div>${trade.token}</div>
          <div>${trade.amount}</div>
          <div>${trade.price}</div>
        </div>
      `).join('')}
    </div>
    
    <div class="comments-section">
      <div class="comment-form">
        <input type="text" class="comment-input" placeholder="Add a bad comment..." data-kol-id="${kol.id}">
        <button class="comment-submit" onclick="addComment(${kol.id}, true)">Post</button>
      </div>
      
      ${comments.length > 0 ? 
        comments.map(comment => `
          <div class="comment" data-comment-id="${comment.id}">
            <p class="comment-text">${comment.text}</p>
            <div class="comment-reactions">
              <div class="reaction" onclick="addReaction('${comment.id}', 'dislike')">
                <i class="fas fa-thumbs-down action-icon"></i>
                <span class="dislike-count">${comment.dislikes}</span>
              </div>
              <div class="reaction" onclick="addReaction('${comment.id}', 'vomit')">
                <i class="fas fa-skull action-icon"></i>
                <span class="vomit-count">${comment.vomits}</span>
              </div>
            </div>
          </div>
        `).join('') :
        '<div class="no-comments">No comments yet. Be the first to roast!</div>'
      }
    </div>
  `;
  
  document.getElementById('profileModal').classList.add('active');

}

// Close modal
function closeModal() {
  const modal = document.getElementById('profileModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}



// Add reaction
async function addReaction(commentId, reactionType) {
  try {
    const result = await db.addReaction(commentId, reactionType);
    
    if (result.success) {
      // Update the UI
      const commentElement = document.querySelector(`.comment[data-comment-id="${commentId}"]`);
      if (commentElement) {
        console.log(`.${reactionType}-count`);
        const countElement = commentElement.querySelector(`.${reactionType}-count`);
        if (countElement) {
          const currentCount = parseInt(countElement.textContent) || 0;
          countElement.textContent = currentCount + 1;
        }
      }
    }
  } catch (error) {
    console.error('Error adding reaction:', error);
  }
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

// Close modal when clicking outside
document.getElementById('profileModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Функция для генерации случайной транзакции
function generateRandomTrade(kol) {
    const types = ['Buy', 'Sell'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const token = kol.mb[Math.floor(Math.random() * kol.mb.length)];
    const amount = (Math.random() * 50 + 1).toFixed(2) + 'm';
    const price = (Math.random() * 5 + 0.1).toFixed(2) + ' Sol';
    
    return { type, token, amount, price };
  }
  
 // Функция для добавления случайных транзакций
  
  // Запускаем таймер (каждые 30 секунд)
  setInterval(addRandomTransactions, 30000);

  async function loadInitialData() {
    try {
      const response = await fetch('get_transactions.php');
      const transactions = await response.json();

      // Группируем транзакции по KOL
      const transactionsByKol = {};
      transactions.forEach(tx => {
        if (!transactionsByKol[tx.kol_id]) {
          transactionsByKol[tx.kol_id] = [];
        }
        transactionsByKol[tx.kol_id].push({
          type: tx.type,
          token: tx.token,
          amount: tx.amount,
          price: tx.price
        });
      });
     
      // Обновляем данные KOL
      kols.forEach(kol => {
        if (transactionsByKol[kol.id]) {
          kol.trades = transactionsByKol[kol.id].slice(0, 10); // Берем последние 10
        }
      });
      
      // Рендерим KOLs
      renderKOLs(kols);
    } catch (error) {
      console.error('Error loading transactions:', error);
      renderKOLs(kols); // Рендерим с исходными данными
    }
  }
  
  // Заменяем вызов renderKOLs(kols) на:
  document.addEventListener('DOMContentLoaded', loadInitialData);

  // Таймер обратного отсчета
let timeLeft = 30;

function updateTimer() {
  timeLeft--;
  document.getElementById('timer').textContent = timeLeft;
  
  if (timeLeft <= 0) {
    timeLeft = 30;
  }
}

setInterval(updateTimer, 1000);

async function addRandomTransactions() {
    try {
       // Выбираем 3 случайных KOLs
    const randomKOLs = [...kols]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
       
  for (const kol of randomKOLs) {
    // Генерируем случайную транзакцию
    const newTrade = generateRandomTrade(kol);

    try {
      // Сохраняем в БД
      const response = await fetch('save_transaction.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          kol_id: kol.id,
          type: newTrade.type,
          token: newTrade.token,
          amount: newTrade.amount,
          price: newTrade.price
        })
      });

      const result = await response.json();
      
      if (result.success) {
        // Добавляем в начало массива trades
        kol.trades.unshift(newTrade);
        
        // Если транзакций больше 10, удаляем последнюю
        if (kol.trades.length > 10) {
          kol.trades.pop();
        }

        // Обновляем отображение
        const kolCard = document.querySelector(`.kol-card[data-kol-id="${kol.id}"]`);
        if (kolCard) {
          kolCard.classList.add('new-trade');
          setTimeout(() => kolCard.classList.remove('new-trade'), 1000);
          
          const tradesContainer = kolCard.querySelector('.trades-container');
          console.log(kol.trades);
          if (tradesContainer) {
            tradesContainer.innerHTML = `
              <div class="trade-header">
                <div>Type</div>
                <div>Token</div>
                <div>Amount</div>
                <div>Price</div>
              </div>
              ${kol.trades.slice(0, 3).map(trade => `
                <div class="trade-row trade-${trade.type.toLowerCase()}">
                  <div><span class="trade-type">${trade.type}</span></div>
                  <div>${trade.token}</div>
                  <div>${trade.amount}</div>
                  <div>${trade.price}</div>
                </div>
              `).join('')}
            `;
          }
        }
      }
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  }
    } catch (error) {
      console.error('Error in transaction update:', error);
      // Показываем уведомление пользователю
      showNotification('Failed to update transactions. Please try again later.', 'error');
    }
  }
  
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 500);
    }, 3000);
  }