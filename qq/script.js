// Quick load logic
document.getElementById('quick-load-btn').addEventListener('click', async function() {
    const filename = '深拥我！(2569403569).txt';
    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error('File not found');
        
        // Try to detect encoding from response if possible, but usually we need to try both
        const blob = await response.blob();
        
        // Read as UTF-8 first
        const textUtf8 = await blob.text();
        if (textUtf8.includes('�')) {
            // Re-read as GBK if UTF-8 fails
            const reader = new FileReader();
            reader.onload = function(e) {
                parseAndRender(e.target.result, filename);
            };
            reader.readAsText(blob, 'gbk');
        } else {
            parseAndRender(textUtf8, filename);
        }
    } catch (err) {
        alert('无法直接读取文件，请确保文件位于项目根目录，或者使用“选择本地文件”功能。\n错误信息: ' + err.message);
    }
});

document.getElementById('file-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        let content = e.target.result;
        
        // Basic encoding check: if it looks garbled, try GBK
        if (content.includes('�')) {
            const gbkReader = new FileReader();
            gbkReader.onload = function(e) {
                parseAndRender(e.target.result, file.name);
            };
            gbkReader.readAsText(file, 'gbk');
        } else {
            parseAndRender(content, file.name);
        }
    };
    reader.readAsText(file, 'utf-8');
});

function parseAndRender(text, filename) {
    const messages = [];
    const lines = text.split(/\r?\n/);
    
    // Pattern: 2013-12-01 22:03:25  Nickname(12345) or Nickname <email>
    // The nickname part usually follows the date-time and some spaces.
    const headerRegex = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s+(.+)$/;
    
    let currentMsg = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]; // Don't trim yet to preserve indentation if any
        if (!line.trim()) continue;

        const match = line.match(headerRegex);
        if (match) {
            if (currentMsg) {
                messages.push(currentMsg);
            }
            
            // Extract nickname, remove potential (ID) or <email>
            let rawNickname = match[2].trim();
            let nickname = rawNickname.replace(/\(\d+\)$/, '').replace(/<.+?>$/, '').trim();
            
            currentMsg = {
                time: match[1],
                nickname: nickname || rawNickname, // fallback to raw if empty after cleaning
                content: []
            };
        } else if (currentMsg) {
            currentMsg.content.push(line.trim());
        }
    }
    if (currentMsg) {
        messages.push(currentMsg);
    }

    if (messages.length === 0) {
        alert('无法解析聊天记录，请检查文件格式是否正确。');
        return;
    }

    // Determine "Self" vs "Other"
    // Usually the filename contains the contact name. 
    // Example: "深拥我！(2569403569).txt" -> Contact is "深拥我！"
    let contactName = '';
    const nameMatch = filename.match(/^(.+?)\(\d+\)/) || filename.match(/^(.+?)\.txt/);
    if (nameMatch) {
        contactName = nameMatch[1].trim();
    }

    renderMessages(messages, contactName);
}

function renderMessages(messages, contactName) {
    const container = document.getElementById('messages-list');
    const welcome = document.getElementById('welcome-screen');
    const footer = document.querySelector('.qq-footer');
    const chatTitle = document.getElementById('chat-title');

    container.innerHTML = '';
    welcome.classList.add('hidden');
    container.classList.remove('hidden');
    footer.classList.remove('hidden');
    
    if (contactName) {
        chatTitle.textContent = contactName;
    }

    let lastTime = '';

    messages.forEach(msg => {
        // Show time divider if time changed significantly
        if (shouldShowTime(lastTime, msg.time)) {
            const timeDiv = document.createElement('div');
            timeDiv.className = 'time-divider';
            timeDiv.textContent = formatTime(msg.time);
            container.appendChild(timeDiv);
        }
        lastTime = msg.time;

        const isOther = msg.nickname === contactName;
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isOther ? 'left' : 'right'}`;

        const initials = msg.nickname ? msg.nickname.substring(0, 1).toUpperCase() : '?';
        const avatar = `<div class="avatar">${initials}</div>`;
        const nickname = `<div class="nickname">${msg.nickname}</div>`;
        
        // Handle content
        let contentHtml = msg.content.join('<br>')
            .replace(/\[图片\]/g, '<span class="img-placeholder">[图片]</span>')
            .replace(/\[表情\]/g, '<img src="https://qzonestyle.gtimg.cn/qzone/em/e114.gif" class="qq-emoji-img">');
        
        // QQ Emoji Mapping (Common ones from 2023 era)
        // IDs are based on QQ's classic GIF system
        const emojiMap = {
            '微笑': '100', '撇嘴': '101', '色': '102', '发呆': '103', '得意': '104',
            '流泪': '105', '害羞': '106', '闭嘴': '107', '睡': '108', '大哭': '109',
            '尴尬': '110', '发怒': '111', '调皮': '112', '呲牙': '113', '惊讶': '114',
            '难过': '115', '酷': '116', '冷汗': '117', '抓狂': '118', '吐': '119',
            '偷笑': '120', '可爱': '121', '白眼': '122', '傲慢': '123', '饥饿': '124',
            '困': '125', '惊恐': '126', '流汗': '127', '憨笑': '128', '大兵': '129',
            '奋斗': '130', '咒骂': '131', '疑问': '132', '嘘': '133', '晕': '134',
            '折磨': '135', '衰': '136', '骷髅': '137', '敲打': '138', '再见': '139',
            '擦汗': '140', '抠鼻': '141', '鼓掌': '142', '糗大了': '143', '坏笑': '144',
            '左哼哼': '145', '右哼哼': '146', '哈欠': '147', '鄙视': '148', '委屈': '149',
            '快哭了': '150', '阴险': '151', '亲亲': '152', '吓': '153', '可怜': '154',
            '菜刀': '155', '西瓜': '156', '啤酒': '157', '篮球': '158', '乒乓': '159',
            '咖啡': '160', '饭': '161', '猪头': '162', '玫瑰': '163', '凋谢': '164',
            '示爱': '165', '爱心': '166', '心碎': '167', '蛋糕': '168', '闪电': '169',
            '炸弹': '170', '刀': '171', '足球': '172', '瓢虫': '173', '便便': '174',
            '月亮': '175', '太阳': '176', '礼物': '177', '拥抱': '178', '强': '179',
            '弱': '180', '握手': '181', '胜利': '182', '抱拳': '183', '勾引': '184',
            '拳头': '185', '差劲': '186', '爱你': '187', 'NO': '188', 'OK': '189'
        };

        // Handle common QQ expressions (/表情)
        // Sort keys by length descending to match longest possible emoji first
        const sortedEmojiKeys = Object.keys(emojiMap).sort((a, b) => b.length - a.length);
        const emojiPattern = sortedEmojiKeys.map(key => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
        const qqEmojiRegex = new RegExp(`\\/(${emojiPattern})`, 'g');
        
        contentHtml = contentHtml.replace(qqEmojiRegex, (match, p1) => {
            const emojiId = emojiMap[p1];
            return `<img src="https://qzonestyle.gtimg.cn/qzone/em/e${emojiId}.gif" class="qq-emoji-img" title="/${p1}">`;
        });

        msgDiv.innerHTML = `
            ${avatar}
            <div class="message-content">
                ${isOther ? nickname : ''}
                <div class="bubble">${contentHtml}</div>
            </div>
        `;
        
        container.appendChild(msgDiv);
    });

    // Scroll to bottom
    setTimeout(() => {
        const chatContainer = document.getElementById('chat-container');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 100);
}

// Add back button functionality
document.querySelector('.back-icon').addEventListener('click', function() {
    location.reload();
});

// Double click header to scroll to top
document.querySelector('.qq-header').addEventListener('dblclick', function() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function shouldShowTime(lastTime, currentTime) {
    if (!lastTime) return true;
    const t1 = new Date(lastTime.replace(/-/g, '/'));
    const t2 = new Date(currentTime.replace(/-/g, '/'));
    return (t2 - t1) > 5 * 60 * 1000; // 5 minutes
}

function formatTime(timeStr) {
    const date = new Date(timeStr.replace(/-/g, '/'));
    const now = new Date();
    
    const isToday = date.toDateString() === now.toDateString();
    const hours = date.getHours().toString().padStart(2, '0');
    const mins = date.getMinutes().toString().padStart(2, '0');
    
    if (isToday) {
        return `${hours}:${mins}`;
    } else {
        return `${timeStr.substring(5, 16)}`; // MM-DD HH:mm
    }
}
