const divinationManager = {
    // 小六壬卦象数据
    hexagrams: [
        { 
            name: '大安', 
            spirit: '青龙',
            weather: '阴晴日，清风送爽杨柳枝',
            career: '目前工作稳定，可得上司赏识，但切勿锋芒太露',
            love: '若为女子问则好，感情顺遂。若为男子问则较差，感情虽稳，但是以无新鲜感，会出现点小问题',
            wealth: '求财可，但是目前不宜扩张，只能够守住旧业',
            health: '身体没有大病，但须注意病由口入，或因过度操劳而得病',
            general: '属吉卦，凡事都可以得到安康，但是此为静卦，宜静不宜动',
            spirit_meaning: '青龙主吉祥、喜事、财运、正直',
            lost_items: '失物在东方，衣裳掉在草丛中，禽畜迷路林中睡，不过多天送回来，小孩走路得安稳，也有贵人保安康',
            others: '问运势：目前运势还不错，有稳定成长的情况，但不宜躁进\n问神鬼：大安为解灾之神，鬼神之事问题不大，若是小孩为自身惊吓所致，���冲犯东方之煞神或犯土煞\n问行人：人平安，但目前不愿与自身连络'
        },
        { 
            name: '留连', 
            spirit: '玄武',
            weather: '雨绵绵，旱苗洗雨在禾田',
            career: '被上司盯或者被人扯后腿，小人之卦',
            love: '双方沟通不良、冷战、或者一方过于强势，感情不得平衡',
            wealth: '求财不可得，此为破财之卦，且有被人影响破财之现象',
            health: '肠胃不舒服或者精神压力太大所得之病',
            general: '属凶卦，代表凡事阻碍、迟滞，此卦更不宜有过大动作，凡事宜守',
            spirit_meaning: '玄武主盗贼、欺骗、暧昧、小人',
            lost_items: '失物寻北方，衣物禽畜在水边，鸡儿鸭子水中睡，牛马已经绳子牵，急需焚香来禀告，免得六公再要钱，女人保藏此失物，她见便是报君子',
            others: '问运势：目前运势低迷，心情不开朗，凡事受阻\n问神鬼：小孩子主要被过路游魂所煞到，大人为冲犯女性鬼神\n问行人：人平安，但目前仍流连忘返'
        },
        { 
            name: '速喜', 
            spirit: '朱雀',
            weather: '霓虹见，艳阳高照在人间',
            career: '作利��但须意文件上的疏失',
            love: '若是刚开始的感情，则为热恋。若是已经持续一段时间，则为口舌',
            wealth: '求财可得，但有先破财而后得财或者先得财后破财之兆，若得到钱财就必须赶快脱身',
            health: '心脏、血液循环有问题或者头部、脑压的问题，但是问题不大',
            general: '为吉卦，代表凡事皆有喜讯，而且很快就会到来',
            spirit_meaning: '朱雀主喜庆、文书信息、口舌是非',
            lost_items: '失物在眼前，劝君望过火炉边，不见请君南方找，一定归你到身边，漏财瘟神遮闭眼，留得久看发疯癫',
            others: '问运势：目前运势渐开，要积极的行动就可以如愿\n问神鬼：小孩子被动物吓到或者被女性阴神冲犯，大人为冲犯男性鬼神\n问行人：人已经快到了'
        },
        { 
            name: '赤口', 
            spirit: '白虎',
            weather: '冷如刀，雷雨霜雪兼冰雹',
            career: '若为武职或者粗重行业则顺，若为文职则不顺',
            love: '感情纷争多，或女方身体有疾病',
            wealth: '大起大落之财，求财不易',
            health: '胸口、支气管，或者有血光之灾，赤也有流疾病意义',
            general: '为凶卦，代表运势多舛，而且诸多纷争亦有口舌之祸',
            spirit_meaning: '白虎主凶险、灾祸、其性直而无私',
            lost_items: '失物西方寻，定是有人来收藏，寻找之时碰见人，劝君免问小心防，为善殉寻告你知，为恶咒骂无人讲',
            others: '问运势：目前运势不明，若有大计划就要赶快实施、不要拖延，则可成功。若卜小事则不成\n问神鬼：犯到择日凶神，或者被人索害\n问行人：所问之人目前有困难或者有事情纠缠'
        },
        { 
            name: '小吉', 
            spirit: '螣蛇',
            weather: '星月稀，阴阳天里阴阳期',
            career: '工作不错，但须注意处理公司财务之事，以及与下属沟通之事',
            love: '若没有感情，则可因他人介绍而得。若有感情，则恋情顺利',
            wealth: '求财可得，而且有因人得财之兆',
            health: '肝胆之疾病和消化系统，但是问题不大',
            general: '为吉卦，代表凡事皆吉，但是不如大安的安稳也不如速喜快速，而是介于两者中间',
            spirit_meaning: '螣蛇主和好、合作、友谊、成功',
            lost_items: '失物东，屋柴草遮着眼牛马已干草睡��衣物次天可寻回，小孩迷路星石救，护送回家在次天',
            others: '问运势：目前运势不错，保持目前状况就会越来越好\n问神鬼：小孩子被动物吓到或者被女性阴神冲犯，大人为冲犯家中祖先\n问行人：人已经快到了'
        },
        { 
            name: '空亡', 
            spirit: '勾陈',
            weather: '雾茫茫，不见明海和天长',
            career: '工作失利，容易被人陷害或者暗中耳语，或者因他人问题而让自己工作失利',
            love: '双方争执多，且有因他人问题或者介入而争执之事',
            wealth: '求财难得，保守为要',
            health: '脾胃出毛病，或者神经系统出问题，也有因灵界而生病之兆',
            general: '为凶卦，代表凡事秽暗不明，内心不安，运途起伏',
            spirit_meaning: '勾陈主官司、诉讼、勾连不清',
            lost_items: '失物已失踪，六畜将死泥土中，或在贪心人手中，寻紧急时见尸踪，衣物失去已落空，劝君安心免头痛',
            others: '问运势：目前运势不佳，自身拿不定主意，无所适从，可多听取他人之意见，切莫随意就做判断\n问神鬼：家中阳宅或者阴宅出题，导冲犯\n问行人人在途中到困难或��厄而难到'
        }
    ],

    // 计算卦象
    calculateHexagram(month, day, hour) {
        // 卦序：大安(0)、流连(1)、速喜(2)、赤口(3)、小吉(4)、空亡(5)
        const hexagramOrder = ['大安', '流连', '速喜', '赤口', '小吉', '空亡'];
        
        // 1. 从大安开始数月份（大安算第1个）
        let position = 0; // 起始位置在大安
        for (let i = 2; i <= month; i++) { // 从2开始因为大安已经是第1个了
            position = (position + 1) % 6;
        }
        
        // 2. 从月份数完的位置继续数日期
        const startDayPosition = position; // 记住日期开始的位置
        for (let i = 2; i <= day; i++) { // 同样，当前位置算第1个
            position = (position + 1) % 6;
        }
        
        // 3. 从日期数完的位置继续数时辰
        const hourNum = parseInt(hour); // 直接使用数字时辰
        if (isNaN(hourNum) || hourNum < 1 || hourNum > 12) {
            console.error('无效的时辰:', hour);
            return null;
        }
        
        const startHourPosition = position; // 记住时辰开始的位置
        for (let i = 2; i <= hourNum; i++) { // 当前位置算第1个
            position = (position + 1) % 6;
        }
        
        // 据最终位置取卦象
        const hexagramName = hexagramOrder[position];
        
        // 调试信息
        console.log(`月份从大安数${month}个停在：${hexagramOrder[startDayPosition]}`);
        console.log(`日期从${hexagramOrder[startDayPosition]}数${day}个停在：${hexagramOrder[startHourPosition]}`);
        console.log(`时辰从${hexagramOrder[startHourPosition]}数${hourNum}个停在：${hexagramName}`);
        
        const result = this.hexagrams.find(h => h.name === hexagramName);
        if (!result) {
            console.error('未找到卦象:', hexagramName);
            return null;
        }
        return result;
    },

    // 将地支时辰转换为数字（1-12）
    getHourNumber(hourBranch) {
        const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
        const hourNum = branches.indexOf(hourBranch) + 1;
        return hourNum === 0 ? 12 : hourNum;
    },

    // 执行起卦
    async performDivination(month, day, hour) {
        // 开始动画
        await animationManager.playDivinationAnimation();

        // 计算卦象
        const hexagram = this.calculateHexagram(month, day, hour);
        if (!hexagram) {
            alert('起卦失败，请重试');
            return null;
        }

        // 示结果
        this.displayResult(hexagram);

        return hexagram;
    },

    // 显示结果
    displayResult(hexagram) {
        if (!hexagram) {
            console.error('卦象为空');
            return;
        }

        try {
            // 显示卦象名称和神煞
            if (elements.hexagramName) {
                elements.hexagramName.textContent = `${hexagram.name}（${hexagram.spirit}）`;
            }

            // 显示总体评价
            if (elements.general) {
                elements.general.textContent = hexagram.general;
            }

            // 显示神煞含义
            if (elements.spirit_meaning) {
                elements.spirit_meaning.textContent = hexagram.spirit_meaning;
            }

            // 显示天气预测
            if (elements.weather) {
                elements.weather.textContent = hexagram.weather;
            }

            // 显示事业解释
            if (elements.career) {
                elements.career.textContent = hexagram.career;
            }

            // 显示感情解释
            if (elements.love) {
                elements.love.textContent = hexagram.love;
            }

            // 显示财运解释
            if (elements.wealth) {
                elements.wealth.textContent = hexagram.wealth;
            }

            // 显��健康解释
            if (elements.health) {
                elements.health.textContent = hexagram.health;
            }

            // 显示失物寻找
            if (elements.lost_items) {
                elements.lost_items.textContent = hexagram.lost_items;
            }

            // 显示其他问题
            if (elements.others) {
                elements.others.textContent = hexagram.others;
            }
        } catch (error) {
            console.error('显示结果时出错:', error);
        }
    }
};

const animationManager = {
    init() {
        elements.divinationAnimation.style.display = 'none';
    },

    // 播放动画
    async playDivinationAnimation() {
        return new Promise((resolve) => {
            elements.divinationAnimation.style.display = 'block';
            elements.divinationAnimation.textContent = '起卦中...';
            
            setTimeout(() => {
                elements.divinationAnimation.style.display = 'none';
                resolve();
            }, 2000);
        });
    }
};

// 检查lunar-javascript库是否正确加载
function checkLunarLibrary() {
    if (typeof Lunar === 'undefined') {
        console.error('lunar-javascript库未找到，请确保lunar.js文存在');
        alert('日期转换组件加载失败请确保lunar.js文件存在');
        return false;
    }
    
    try {
        const testDate = Lunar.fromDate(new Date());
        if (!testDate || typeof testDate.getMonth !== 'function') {
            throw new Error('农历转换测试失败');
        }
        return true;
    } catch (error) {
        console.error('lunar-javascript库测试失败:', error);
        alert('日期转换组件测试失败，请刷新页面重试');
        return false;
    }
}

// DOM元素
const elements = {
    // 页面元素
    homePage: document.getElementById('homePage'),
    manualPage: document.getElementById('manualPage'),
    resultPage: document.getElementById('resultPage'),
    
    // 时间显示元素
    currentDate: document.getElementById('currentDate'),
    currentLunarDate: document.getElementById('currentLunarDate'),
    currentTime: document.getElementById('currentTime'),
    currentHourBranch: document.getElementById('currentHourBranch'),
    refreshTime: document.getElementById('refreshTime'),
    
    // 按钮元素
    autoDivine: document.getElementById('autoDivine'),
    manualDivine: document.getElementById('manualDivine'),
    confirmTime: document.getElementById('confirmTime'),
    backToHome: document.getElementById('backToHome'),
    backToHomeFromResult: document.getElementById('backToHomeFromResult'),
    newDivination: document.getElementById('newDivination'),
    
    // 日历元素
    calendarGrid: document.getElementById('calendarGrid'),
    prevMonth: document.getElementById('prevMonth'),
    nextMonth: document.getElementById('nextMonth'),
    currentMonth: document.getElementById('currentMonth'),
    hourSelect: document.getElementById('hourSelect'),
    
    // 结果展示元素
    divinationAnimation: document.getElementById('divinationAnimation'),
    hexagramName: document.getElementById('hexagramName'),
    general: document.getElementById('general'),
    spirit_meaning: document.getElementById('spirit_meaning'),
    weather: document.getElementById('weather'),
    career: document.getElementById('career'),
    love: document.getElementById('love'),
    wealth: document.getElementById('wealth'),
    health: document.getElementById('health'),
    lost_items: document.getElementById('lost_items'),
    others: document.getElementById('others')
};

// 时间处理
const timeManager = {
    earthlyBranches: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
    
    getCurrentDateTime() {
        if (!checkLunarLibrary()) return null;
        
        const now = new Date();
        try {
            const lunar = Lunar.fromDate(now);
            return {
                solar: now,
                lunar: lunar,
                hour: this.getHourBranch(now)
            };
        } catch (error) {
            console.error('农历转换失败:', error);
            alert('日期转换失败，请刷新页面重试');
            return null;
        }
    },
    
    getHourBranch(date) {
        const hour = date.getHours();
        const index = Math.floor((hour + 1) % 24 / 2);
        return this.earthlyBranches[index];
    },
    
    formatDateTime(dateTime) {
        if (!dateTime) return null;
        const {solar, lunar, hour} = dateTime;
        return {
            solarDate: `${solar.getFullYear()}年${solar.getMonth() + 1}月${solar.getDate()}日`,
            lunarDate: `农历${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`,
            time: `${solar.getHours().toString().padStart(2, '0')}:${solar.getMinutes().toString().padStart(2, '0')}`,
            hourBranch: `${hour}时`
        };
    },
    
    updateTimeDisplay() {
        const dateTime = this.getCurrentDateTime();
        const formatted = this.formatDateTime(dateTime);
        if (!formatted) return;
        
        elements.currentDate.textContent = formatted.solarDate;
        elements.currentLunarDate.textContent = formatted.lunarDate;
        elements.currentTime.textContent = formatted.time;
        elements.currentHourBranch.textContent = formatted.hourBranch;
    }
};

// 页面管理器
const pageManager = {
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    },
    
    init() {
        this.showPage('homePage');
        
        elements.manualDivine.addEventListener('click', () => {
            this.showPage('manualPage');
        });
        
        elements.backToHome.addEventListener('click', () => {
            this.showPage('homePage');
        });
        
        elements.backToHomeFromResult.addEventListener('click', () => {
            this.showPage('homePage');
        });
        
        elements.newDivination.addEventListener('click', () => {
            this.showPage('homePage');
        });
    }
};

// 农历历
const lunarCalendar = {
    currentLunar: null,
    selectedDate: null,
    
    init() {
        if (!checkLunarLibrary()) return;
        
        try {
            this.currentLunar = Lunar.fromDate(new Date());
            this.renderCalendar();
            this.bindEvents();
        } catch (error) {
            console.error('农历日历初始化失败:', error);
            alert('日历初始化失败，请刷新页面重试');
        }
    },
    
    renderCalendar() {
        if (!this.currentLunar) return;

        try {
            // 获取当前农历月的信息
            const year = this.currentLunar.getYear();
            const month = this.currentLunar.getMonth();
            
            // 获取当前月对象
            const currentMonth = LunarYear.fromYear(year).getMonths()[month - 1];
            const currentMonthDays = currentMonth.getDayCount();
            
            // 更新月份显示
            const monthText = this.currentLunar.getMonthInChinese();
            elements.currentMonth.textContent = `${this.currentLunar.getYearInChinese()}年 ${monthText}月`;

            // 清空日历网格
            elements.calendarGrid.innerHTML = '';

            // 填充日历网格
            for (let day = 1; day <= currentMonthDays; day++) {
                const dayElement = document.createElement('div');
                dayElement.classList.add('calendar-day');
                dayElement.textContent = day;
                dayElement.dataset.day = day;

                // 如果是当前选中的日期，添加选中样式
                if (this.selectedDay === day) {
                    dayElement.classList.add('selected');
                }

                elements.calendarGrid.appendChild(dayElement);
            }

            // 如果需要，添加空白格子以保持网格对齐
            const totalCells = 42; // 6行7列
            const emptyCells = totalCells - currentMonthDays;
            for (let i = 0; i < emptyCells; i++) {
                const emptyElement = document.createElement('div');
                emptyElement.classList.add('calendar-day', 'empty');
                elements.calendarGrid.appendChild(emptyElement);
            }

            // 更新时间显示（使用timeManager）
            timeManager.updateTimeDisplay();
            
            console.log(`当前农历: ${year}年${month}月, 该月天数: ${currentMonthDays}`);
        } catch (error) {
            console.error('渲染日历失败:', error);
            console.log('当前农历对象:', this.currentLunar);
        }
    },
    
    getMonthInChinese(month) {
        const monthNames = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
        return monthNames[month - 1];
    },
    
    getDaysInMonth(year, month) {
        // 农历月份天数查表
        const monthDays = {
            1: 29,
            2: 30,
            3: 29,
            4: 30,
            5: 29,
            6: 30,
            7: 29,
            8: 30,
            9: 29,
            10: 30,
            11: 29,
            12: 30
        };
        return monthDays[month] || 30;
    },
    
    bindEvents() {
        elements.prevMonth.addEventListener('click', () => {
            try {
                // 获取当前农历年月
                const currentYear = this.currentLunar.getYear();
                const currentMonth = this.currentLunar.getMonth();
                
                // 计算上个月的年月
                let prevYear = currentYear;
                let prevMonth = currentMonth - 1;
                if (prevMonth < 1) {
                    prevYear--;
                    prevMonth = 12;
                }
                
                // 使用农历API创建新日期
                this.currentLunar = Lunar.fromYmd(prevYear, prevMonth, 1);
                this.renderCalendar();
                
                console.log(`切换到农历 ${prevYear}年${prevMonth}月`);
            } catch (error) {
                console.error('月份切换失败:', error);
            }
        });
        
        elements.nextMonth.addEventListener('click', () => {
            try {
                // 获取当前农历年月
                const currentYear = this.currentLunar.getYear();
                const currentMonth = this.currentLunar.getMonth();
                
                // 计算下个月的年月
                let nextYear = currentYear;
                let nextMonth = currentMonth + 1;
                if (nextMonth > 12) {
                    nextYear++;
                    nextMonth = 1;
                }
                
                // 使用农历API创建新日期
                this.currentLunar = Lunar.fromYmd(nextYear, nextMonth, 1);
                this.renderCalendar();
                
                console.log(`切换到农历 ${nextYear}年${nextMonth}月`);
            } catch (error) {
                console.error('月份切换失败:', error);
            }
        });
        
        elements.calendarGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('calendar-day') && !e.target.classList.contains('empty')) {
                const day = parseInt(e.target.dataset.day);
                this.selectDate(day);
            }
        });
    },
    
    selectDate(day) {
        this.selectedDate = {
            year: this.currentLunar.getYear(),
            month: this.currentLunar.getMonth(),
            day: day
        };
        
        document.querySelectorAll('.calendar-day').forEach(el => {
            el.classList.remove('selected');
        });
        
        const selectedDayElement = document.querySelector(`[data-day="${day}"]`);
        if (selectedDayElement) {
            selectedDayElement.classList.add('selected');
        }
    }
};

// 初始化应用
function initApp() {
    if (!checkLunarLibrary()) return;
    
    // 初始化时间显示
    timeManager.updateTimeDisplay();
    setInterval(() => timeManager.updateTimeDisplay(), 60000);
    
    // 初始化农历日历
    lunarCalendar.init();
    
    // 初始化页面管理
    pageManager.init();
    
    // ���始化动画管理器
    animationManager.init();
    
    // 绑定自动起卦事件
    elements.autoDivine.addEventListener('click', async () => {
        const dateTime = timeManager.getCurrentDateTime();
        if (!dateTime) return;
        
        // 将地支时辰换为数字
        const hourNum = timeManager.earthlyBranches.indexOf(dateTime.hour) + 1;
        
        const result = await divinationManager.performDivination(
            dateTime.lunar.getMonth(),
            dateTime.lunar.getDay(),
            hourNum
        );
        pageManager.showPage('resultPage');
    });
    
    // 绑定手动起卦事件
    elements.confirmTime.addEventListener('click', async () => {
        if (!lunarCalendar.selectedDate) {
            alert('请选择日期');
            return;
        }
        
        if (!elements.hourSelect.value) {
            alert('请选择时辰');
            return;
        }
        
        const result = await divinationManager.performDivination(
            lunarCalendar.selectedDate.month,
            lunarCalendar.selectedDate.day,
            elements.hourSelect.value
        );
        pageManager.showPage('resultPage');
    });
    
    // 绑定刷新时间件
    elements.refreshTime.addEventListener('click', () => {
        timeManager.updateTimeDisplay();
    });
}

// 确保DOM加载完成后再初始化应用
document.addEventListener('DOMContentLoaded', () => {
    if (!checkLunarLibrary()) {
        document.body.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h1>载失败</h1>
                <p>日期转换组件加载失败，请确lunar.js文件存在并且可以正问。</p>
                <button onclick="location.reload()">重新加载</button>
            </div>
        `;
        return;
    }
    
    initApp();
});