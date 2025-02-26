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
            fortune: '目前运势还不错，有稳定成长的情况，但不宜躁进',
            ghost: '大安为解灾之神，鬼神之事问题不大，若是小孩为自身惊吓所致，冲犯东方之煞神或犯土煞',
            traveler: '人平安，但目前不愿与自身连络'
        },
        { 
            name: '流连', 
            spirit: '玄武',
            weather: '雨绵绵，旱苗洗雨在禾田',
            career: '被上司盯或者被人扯后腿，小人之卦',
            love: '双方沟通不良、冷战、或者一方过于强势，感情不得平衡',
            wealth: '求财不可得，此为破财之卦，且有被人影响破财之现象',
            health: '肠胃不舒服或者精神压力太大所得之病',
            general: '属凶卦，代表凡事阻碍、迟滞，此卦更不宜有过大动作，凡事宜守',
            spirit_meaning: '玄武主盗贼、欺骗、暧昧、小人',
            lost_items: '失物寻北方，衣物禽畜在水边，鸡儿鸭子水中睡，牛马已经绳子牵，急需焚香来禀告，免得六公再要钱，女人保藏此失物，她见便是报君子',
            fortune: '目前运势低迷，心情不开朗，凡事受阻',
            ghost: '小孩子主要被过路游魂所煞到，大人为冲犯女性鬼神',
            traveler: '人平安，但目前仍流连忘返'
        },
        { 
            name: '速喜', 
            spirit: '朱雀',
            weather: '霓虹见，艳阳高照在人间',
            career: '作利但件上的疏失',
            love: '若是刚开始的感情，则为热恋。若是已经持续一段时间，则为口舌',
            wealth: '求财可得，但有先破财而后得财或者先得财后破财之兆，若得到钱财就必须赶快脱身',
            health: '心脏、血液循环有问题或者头部、脑压的问题，但是问题不大',
            general: '为吉卦，代表凡事皆有喜讯，而且很快就会到来',
            spirit_meaning: '朱雀主喜庆、文书信息、口舌是非',
            lost_items: '失物在眼前，劝君望过火炉边，不见请君南方找，一定归你到身边，漏财瘟神遮闭眼，留得久看发疯癫',
            fortune: '目前运势渐开，要积极的行动就可以如愿',
            ghost: '小孩子被动物吓到或者被女性阴神冲犯，大人为冲犯男性鬼神',
            traveler: '人已经快到了'
        },
        { 
            name: '赤口', 
            spirit: '白虎',
            weather: '冷如刀，雷雨霜雪兼冰雹',
            career: '若为武职或者粗重行业则顺，若为文职则不顺',
            love: '感情纷争多，或女方身体有疾病',
            wealth: '大起大落之财，求财不易',
            health: '胸口、支气管，或者有血光之灾，赤也有',
            general: '为凶卦，代表运势多舛，而且诸多纷争亦有口舌之祸',
            spirit_meaning: '白虎主凶险、灾祸、其性直而无私',
            lost_items: '失物西方寻，定是有人来收藏，寻找之时碰见人，劝君免问小心防，为善殉寻告你知，为恶咒骂无人讲',
            fortune: '目前运势不明，若有大计划就要赶快实施、不要拖延，则可成功。若卜小事则不成',
            ghost: '犯到择日凶神，或者被人索害',
            traveler: '所问之人目前有困难或者有事情纠缠'
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
            lost_items: '失物东屋柴草遮眼牛干草天可石救，护送回家在次天',
            fortune: '目前运势不错，保持目前状况就会越来越好',
            ghost: '小孩子被动物吓到或者被女性阴神冲犯，大人为冲犯家中祖先',
            traveler: '人已经快到了'
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
            fortune: '目前运势不佳，自身拿不定主意，无所适从，可多听取他人之意见，切莫随意就做判断',
            ghost: '家中阳宅或者阴宅出题，导冲犯',
            traveler: '人在到困或而难'
        }
    ],

    // 计算
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
        
        // 据终位置取卦象
        const hexagramName = hexagramOrder[position];
        
        // 调信息
        console.log(`份从大安数${month}个停在：${hexagramOrder[startDayPosition]}`);
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

        // 示
        this.displayResult(hexagram);

        return hexagram;
    },

    // 显示果
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

            // 显示起卦时间
            if (elements.divinationTime) {
                const now = new Date();
                const lunar = Lunar.fromDate(now);
                const timeStr = `起卦时间：${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 农历${lunar.getMonthInChinese()}月${lunar.getDayInChinese()} ${timeManager.getHourBranch(now)}时`;
                elements.divinationTime.textContent = timeStr;
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

            // 示事业解释
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

            // 显示健康解释
            if (elements.health) {
                elements.health.textContent = hexagram.health;
            }

            // 显示失物寻找
            if (elements.lost_items) {
                elements.lost_items.textContent = hexagram.lost_items;
            }

            // 显示问运势
            if (elements.fortune) {
                elements.fortune.textContent = hexagram.fortune;
            }

            // 显示问神鬼
            if (elements.ghost) {
                elements.ghost.textContent = hexagram.ghost;
            }

            // 显示问行人
            if (elements.traveler) {
                elements.traveler.textContent = hexagram.traveler;
            }
        } catch (error) {
            console.error('显示结果时错:', error);
        }
    }
};

const lostItemManager = {
    // 方位对应（使用原句）
    directionMap: {
        '甲': '甲震离丙辛坤',
        '乙': '甲震乙离丙辛',
        '丙': '甲震乙离丙辛坤',
        '丁': '丁乾戊坎己巽门',
        '戊': '丁乾戊坎己巽门',
        '己': '丁乾戊坎己巽门',
        '庚': '庚日失物兑上找',
        '辛': '甲震乙离丙辛坤',
        '壬': '壬癸可在艮上寻',
        '癸': '壬癸可在艮上寻'
    },

    // 人物对应
    personMap: {
        '甲': '男人（甲己阳人乙庚阴）',
        '乙': '女人（甲己阳人乙庚阴）',
        '丙': '小孩（丙辛童子暗来侵）',
        '丁': '亲人（丁壬不出亲人手）',
        '戊': '家中（戊癸失物不出门）',
        '己': '男人（甲己阳人乙庚阴）',
        '庚': '女人（甲己阳人乙庚阴）',
        '辛': '小孩（丙辛童子暗来侵）',
        '壬': '亲人（丁壬不出亲人手）',
        '癸': '家中（戊癸失物不出门）'
    },

    // 距离对应
    distanceMap: {
        '甲': '距离丢失地点约五里地左右（甲己不出五里地）',
        '乙': '已散落民间或距离较远，可能已转手他人（乙庚千里民间寻）',
        '丙': '距离丢失地点约十里（丙辛整整十里内）',
        '丁': '在三里之内（丁壬三里之内寻）',
        '戊': '就在原地��戊癸还在本处藏）',
        '己': '距离丢失地点约里地左右（甲己不出五里地）',
        '庚': '已散落民间或距离较远，可能已转手他人（乙庚千里民间寻）',
        '辛': '距离丢失地点约十里（丙辛整整十里内）',
        '壬': '在三里之内（丁壬三里之内寻）',
        '癸': '在原地（戊癸还在本处藏）'
    },

    // 位置对应（使用原句）
    locationMap: {
        '子': '子午卯酉在路旁',
        '丑': '辰戌丑未身未动',
        '寅': '寅申巳亥归他乡',
        '卯': '子午卯酉在路旁',
        '辰': '辰戌丑未身未动',
        '巳': '寅申巳亥归他乡',
        '午': '子午卯酉在路旁',
        '未': '辰戌丑未身未动',
        '申': '寅申巳亥归他乡',
        '酉': '子午卯酉在路旁',
        '戌': '辰戌丑未身未动',
        '亥': '寅申巳亥归他乡'
    },

    // 方位解释映射
    directionExplainMap: {
        '甲': '正东方向',
        '乙': '正南方向',
        '丙': '西南方向',
        '丁': '西北方向',
        '戊': '正北方向',
        '己': '东南方向',
        '庚': '正西方向',
        '辛': '西南方向',
        '壬': '东北方向',
        '癸': '东北方向'
    },

    // 位置解释映射
    locationExplainMap: {
        '子': '在路边这样比较显眼、容易被经过的地方出现，提示可以沿着道路周边去寻找失物',
        '午': '在路边这样比较显眼、容易被经过的地方出现，提示可以沿着道路周边去寻找失物',
        '卯': '在路边这样比较显眼、容易被经过的地方出现，提示可以沿着道路周边去寻找失物',
        '酉': '在路边这样比较显眼、容易被经过的地方出现，提示可以沿着道路周边去寻找失物',
        '寅': '已经离开比较近的范围，到了较远的地方了，寻找起来可能需要去更远些、更陌生些的地方去查找',
        '申': '已经离开比较近的范围，到了较远的地方了，寻找起来可能需要去更远些、更陌生些的地方去查找',
        '巳': '已经离开比较近的范围，到了较远的地方了，寻找起来可能需要去更远些、更陌生些的地方去查找',
        '亥': '已经离开比较近的范围，到了较远的地方了，寻找起来可能需要去更远些、更陌生些的地方去查找',
        '辰': '还在原处附近，没有被挪动到太远的地方，只要在原本丢失的那一片区域仔细找找，就有较大可能找到它',
        '戌': '还在原处附近，没有被挪动到太远的地方，只要在原本丢失的那一片区域仔细找找，就有较大可能找到它',
        '丑': '还在原处附近，没有被挪动到太远的地方，只要在原本丢失的那一片区域仔细找找，就有较大可能找到它',
        '未': '还在原处附近，没有被挪动到太远的地方，只要在原本丢失的那一片区域仔细找找，就有较大可能找到它'
    },

    // 添加时辰歌诀
    hourVerseMap: {
        '子': '子时：子午卯酉在路旁，路边显眼易寻找',
        '午': '午时：子午卯酉在路旁，路边显眼易寻找',
        '卯': '卯时：子午卯酉在路旁，路边显眼易寻找',
        '酉': '酉时：子午卯酉在路旁，路边显眼易寻找',
        '寅': '寅时：寅申巳亥归他乡，已到远处难寻觅',
        '申': '申时：寅申巳亥归他乡，已到远处难寻觅',
        '巳': '巳时：寅申巳亥归他乡，已到远处难寻觅',
        '亥': '亥时：寅申巳亥归他乡，已到远处难寻觅',
        '辰': '辰时：辰戌丑未身未动，原地附近仔细找',
        '戌': '戌时：辰戌丑未身未动，原地附近仔细找',
        '丑': '丑时：辰戌丑未身未动，原地附近仔细找',
        '未': '未时：辰戌丑未身未动，原地附近仔细找'
    },

    // 更新显示农历信息
    updateLunarInfo(date) {
        const lunar = Lunar.fromDate(date);
        const hour = date.getHours();
        const hourBranch = timeManager.getHourBranch(date);
        const timeGan = this.getTimeGan(lunar.getDayGan(), hourBranch);
        
        elements.lostItemLunarDate.textContent = `农历：${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
        elements.lostItemDayGan.textContent = `日干：${lunar.getDayGan()}`;
        elements.lostItemTimeGan.textContent = `时干：${timeGan}`;
        elements.lostItemHourBranch.textContent = `时辰：${hourBranch}`;
        
        return {
            dayGan: lunar.getDayGan(),
            timeGan: timeGan,
            hourBranch: hourBranch
        };
    },

    // 计算时干
    getTimeGan(dayGan, hourBranch) {
        const ganOrder = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
        const zhiOrder = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
        
        // 日干对应的子时时干
        const ziHourGanIndex = {
            '甲': 0, // 甲日子时见甲
            '乙': 2, // 乙日子时见丙
            '丙': 4, // 丙日子时见戊
            '丁': 6, // 丁日子时见庚
            '戊': 8, // 戊日子时见壬
            '己': 0, // 己日子时见甲
            '庚': 2, // 庚日子时见丙
            '辛': 4, // 辛日子时见戊
            '壬': 6, // 壬日子时见庚
            '癸': 8  // 癸日子时见壬
        };

        // 获取子时时干的索引
        const baseGanIndex = ziHourGanIndex[dayGan];
        if (baseGanIndex === undefined) return '--';

        // 获取辰的索引
        const hourIndex = zhiOrder.indexOf(hourBranch);
        if (hourIndex === -1) return '--';

        // 计算实际时干的索引
        const timeGanIndex = (baseGanIndex + hourIndex) % 10;
        
        return ganOrder[timeGanIndex];
    },

    // 显示结果
    showResult() {
        document.querySelector('#lostItemPage .result-content').style.display = 'block';
    },

    // 隐藏结果
    hideResult() {
        document.querySelector('#lostItemPage .result-content').style.display = 'none';
    },

    performDivination(dayGan, hourZhi) {
        return {
            direction: `${this.directionExplainMap[dayGan]}（${this.directionMap[dayGan]}）`,
            person: this.personMap[dayGan] || '未知人物',
            distance: this.distanceMap[dayGan] || '未知距离',
            location: `${this.locationExplainMap[hourZhi]}（${this.locationMap[hourZhi]}）`
        };
    },

    displayResult(result) {
        elements.lostItemDirection.textContent = result.direction;
        elements.lostItemPerson.textContent = result.person;
        elements.lostItemDistance.textContent = result.distance;
        if (result.location) {
            elements.lostItemLocation.textContent = result.location;
        } else {
            elements.lostItemLocation.textContent = '暂无具体位置信息';
        }
    },

    async saveResult() {
        try {
            // 创建临时容器用于截图
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.background = '#fff';
            tempContainer.style.padding = '20px';
            tempContainer.style.width = '100%';
            tempContainer.style.maxWidth = '600px';
            
            // 创建结果内容
            const content = document.createElement('div');
            content.style.padding = '20px';
            content.style.background = '#fff';
            content.style.borderRadius = '10px';
            content.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            content.style.color = '#000'; // 确保文字颜色为黑色
            
            // 添加时间信息
            const timeInfo = document.createElement('div');
            timeInfo.style.marginBottom = '20px';
            timeInfo.style.padding = '10px';
            timeInfo.style.background = '#f5f5f5';
            timeInfo.style.borderRadius = '5px';
            timeInfo.style.color = '#000'; // 确保文字颜色为黑色
            timeInfo.innerHTML = `
                <div style="margin-bottom: 5px;opacity:1;">${elements.lostItemLunarDate.textContent}</div>
                <div style="margin-bottom: 5px;opacity:1;">${elements.lostItemDayGan.textContent}</div>
                <div style="margin-bottom: 5px;opacity:1;">${elements.lostItemTimeGan.textContent}</div>
                <div style="opacity:1;">${elements.lostItemHourBranch.textContent}</div>
            `;
            content.appendChild(timeInfo);
            
            // 添加结果内容
            const resultContent = document.querySelector('#lostItemPage .result-content').cloneNode(true);
            resultContent.style.display = 'block';
            
            // 确保所有解释部分的文字都是不透明的
            const sections = resultContent.querySelectorAll('.interpretation-section');
            sections.forEach(section => {
                section.style.opacity = '1';
                section.style.transform = 'none';
                section.style.animation = 'none';
                
                // 确保标题和内容都是不透明的
                const title = section.querySelector('h3');
                const text = section.querySelector('p');
                if (title) {
                    title.style.opacity = '1';
                    title.style.color = '#000';
                }
                if (text) {
                    text.style.opacity = '1';
                    text.style.color = '#000';
                }
            });
            
            content.appendChild(resultContent);

            // 添加署名和免责声明
            const footer = document.createElement('div');
            footer.style.marginTop = '20px';
            footer.style.textAlign = 'center';
            footer.style.fontSize = '12px';
            footer.style.color = '#000'; // 修改颜色为黑色
            footer.style.opacity = '1';  // 确保不透明
            footer.innerHTML = `
                <div style="margin-bottom: 10px;opacity:1;">@寻物诀（作者：吴伟Leo）</div>
                <div style="opacity:1;">本站测试内容仅供学习参考，请科学面对生活。</div>
            `;
            content.appendChild(footer);
            
            tempContainer.appendChild(content);
            document.body.appendChild(tempContainer);
            
            // 生成图片
            const canvas = await html2canvas(tempContainer, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#fff',
                logging: false,
                onclone: function(clonedDoc) {
                    // 确保克隆的内容中所有文字都是不透明的
                    const allElements = clonedDoc.querySelectorAll('*');
                    allElements.forEach(el => {
                        el.style.opacity = '1';
                        el.style.color = el.style.color || '#000';
                    });
                }
            });
            
            // 移除临时容器
            document.body.removeChild(tempContainer);
            
            // 转换为图片并下载
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `寻物诀结果_${new Date().getTime()}.png`;
            link.href = image;
            link.click();
            
            alert('结果已保存为图片，请查看下载内容。');
        } catch (error) {
            console.error('生成分享图片失败:', error);
            alert('生成分享图片失败，请重试');
        }
    }
};

const animationManager = {
    init() {
        elements.divinationAnimation.style.display = 'none';
    },

    // 播动画
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

// 检查lunar-javascript是否正确加载
function checkLunarLibrary() {
    if (typeof Lunar === 'undefined') {
        console.error('lunar-javascript库未找到，请确保lunar.js文件存在');
        alert('日期转换组件加载失败，请确保lunar.js文件存在');
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
    liurenPage: document.getElementById('liurenPage'),
    
    // 时间显示元素
    currentDate: document.getElementById('currentDate'),
    currentLunarDate: document.getElementById('currentLunarDate'),
    currentTime: document.getElementById('currentTime'),
    currentHourBranch: document.getElementById('currentHourBranch'),
    refreshTime: document.getElementById('refreshTime'),
    
    // 按钮元素
    backToHomeFromResult: document.getElementById('backToHomeFromResult'),
    newDivination: document.getElementById('newDivination'),
    shareResult: document.getElementById('shareResult'),
    
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
    fortune: document.getElementById('fortune'),
    ghost: document.getElementById('ghost'),
    traveler: document.getElementById('traveler'),
    divinationTime: document.getElementById('divinationTime'),
    
    // 寻物诀页面元素
    lostItemPage: document.getElementById('lostItemPage'),
    backToHomeFromLostItem: document.getElementById('backToHomeFromLostItem'),
    newLostItemDivination: document.getElementById('newLostItemDivination'),
    lostItemDirection: document.getElementById('lostItemDirection'),
    lostItemPerson: document.getElementById('lostItemPerson'),
    lostItemDistance: document.getElementById('lostItemDistance'),
    lostItemLocation: document.getElementById('lostItemLocation'),
    lostItemCurrentDate: document.getElementById('lostItemCurrentDate'),
    lostItemCurrentLunarDate: document.getElementById('lostItemCurrentLunarDate'),
    lostItemCurrentTime: document.getElementById('lostItemCurrentTime'),
    lostItemCurrentHourBranch: document.getElementById('lostItemCurrentHourBranch'),
    lostDateInput: document.getElementById('lostDateInput'),
    lostTimeInput: document.getElementById('lostTimeInput'),
    lostItemLunarDate: document.getElementById('lostItemLunarDate'),
    lostItemDayGan: document.getElementById('lostItemDayGan'),
    lostItemHourBranch: document.getElementById('lostItemHourBranch'),
    calculateLostItem: document.getElementById('calculateLostItem'),
    lostItemTimeGan: document.getElementById('lostItemTimeGan'),
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
        // 只在小六壬页面显示时才更新时间
        if (!document.getElementById('liurenPage').classList.contains('active')) {
            return;
        }

        const dateTime = this.getCurrentDateTime();
        const formatted = this.formatDateTime(dateTime);
        if (!formatted) return;
        
        const elements = {
            currentDate: document.getElementById('currentDate'),
            currentLunarDate: document.getElementById('currentLunarDate'),
            currentTime: document.getElementById('currentTime'),
            currentHourBranch: document.getElementById('currentHourBranch')
        };

        if (elements.currentDate) elements.currentDate.textContent = formatted.solarDate;
        if (elements.currentLunarDate) elements.currentLunarDate.textContent = formatted.lunarDate;
        if (elements.currentTime) elements.currentTime.textContent = formatted.time;
        if (elements.currentHourBranch) elements.currentHourBranch.textContent = formatted.hourBranch;
    }
};

// 页面管理器
const pageManager = {
    showPage(pageId) {
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        // 显示标页面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    },
    
    init() {
        this.showPage('homePage');
        
        // 绑定返回按钮事件
        elements.backToHomeFromResult.addEventListener('click', () => {
            this.showPage('homePage');
        });
        
        elements.backToHomeFromLostItem.addEventListener('click', () => {
            this.showPage('homePage');
        });
        
        // 绑定重新占卜按钮事件
        elements.newDivination.addEventListener('click', () => {
            this.showPage('homePage');
        });
        
        elements.newLostItemDivination.addEventListener('click', () => {
            this.showPage('homePage');
        });
    }
};

// 移除最外层的 initApp() 调用，将所有代码包含在 DOMContentLoaded 事件中

document.addEventListener('DOMContentLoaded', () => {
    if (!checkLunarLibrary()) {
        document.body.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h1>加载失败</h1>
                <p>日期转换组件加载失败，请确保lunar.js文件存在并且可正常访问。</p>
                <button onclick="location.reload()">重新加载</button>
            </div>
        `;
        return;
    }

    // 初始化页面管理器
    pageManager.init();
    
    // 初始化动画管理器
    animationManager.init();

    // 设置时间更新定时器
    setInterval(() => timeManager.updateTimeDisplay(), 60000);

    // 绑定刷新时间按钮事件
    document.getElementById('refreshTime')?.addEventListener('click', () => {
        timeManager.updateTimeDisplay();
    });

    // 绑定首页功能按钮
    document.querySelector('.goto-liuren-button')?.addEventListener('click', () => {
        // 只切换到小六壬页面，显示时间
        pageManager.showPage('liurenPage');
        timeManager.updateTimeDisplay();
    });

    // 绑定小六壬页面的立即起卦按钮
    document.querySelector('.auto-button')?.addEventListener('click', async () => {
        const dateTime = timeManager.getCurrentDateTime();
        if (!dateTime) return;
        
        const hourNum = timeManager.earthlyBranches.indexOf(dateTime.hour) + 1;
        
        await divinationManager.performDivination(
            dateTime.lunar.getMonth(),
            dateTime.lunar.getDay(),
            hourNum
        );
    });

    document.querySelector('.goto-lost-item-button').addEventListener('click', () => {
        // 重置寻物诀页面
        lostItemManager.hideResult();
        // 设置日期时间输入框的默认值为当前时间
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().slice(0, 5);
        elements.lostDateInput.value = dateStr;
        elements.lostTimeInput.value = timeStr;
        // 更新农历信息显示
        lostItemManager.updateLunarInfo(now);
        // 显示寻物诀页面
        pageManager.showPage('lostItemPage');
    });

    // 绑定寻物诀日期时间选择事件
    elements.lostDateInput?.addEventListener('change', () => {
        if (elements.lostDateInput.value && elements.lostTimeInput.value) {
            const date = new Date(elements.lostDateInput.value + 'T' + elements.lostTimeInput.value);
            lostItemManager.updateLunarInfo(date);
        }
    });

    elements.lostTimeInput?.addEventListener('change', () => {
        if (elements.lostDateInput.value && elements.lostTimeInput.value) {
            const date = new Date(elements.lostDateInput.value + 'T' + elements.lostTimeInput.value);
            lostItemManager.updateLunarInfo(date);
        }
    });

    // 绑定计算按钮事件
    elements.calculateLostItem?.addEventListener('click', () => {
        if (!elements.lostDateInput.value || !elements.lostTimeInput.value) {
            alert('请选择完整的丢失时间');
            return;
        }

        const date = new Date(elements.lostDateInput.value + 'T' + elements.lostTimeInput.value);
        const lunarInfo = lostItemManager.updateLunarInfo(date);
        
        const result = lostItemManager.performDivination(
            lunarInfo.dayGan,
            lunarInfo.hourBranch
        );
        
        lostItemManager.displayResult(result);
        lostItemManager.showResult();
    });

    // 绑定其他事件...
    elements.shareResult?.addEventListener('click', async () => {
        try {
            // 获取结果内容区域
            const resultContent = document.querySelector('.result-content');
            
            // 创建临时容器用于截图
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.background = '#fff';
            tempContainer.style.padding = '20px';
            tempContainer.style.width = '100%';
            tempContainer.style.maxWidth = '600px';
            
            // 克隆结果内容
            const clone = resultContent.cloneNode(true);
            // 移除分享按钮区域
            const actions = clone.querySelector('.result-actions');
            if (actions) {
                actions.remove();
            }
            // 确保署名显示正常
            const signature = clone.querySelector('.author-signature');
            if (signature) {
                signature.style.opacity = '1';
                signature.style.transform = 'none';
                signature.style.animation = 'none';
            }
            tempContainer.appendChild(clone);
            document.body.appendChild(tempContainer);
            
            // 生成片
            const canvas = await html2canvas(tempContainer, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#fff',
                logging: false,
                onclone: function(clonedDoc) {
                    // 确保克隆的内容中所有文字都是不透明的
                    const sections = clonedDoc.querySelectorAll('.interpretation-section');
                    sections.forEach(section => {
                        section.style.opacity = '1';
                        section.style.transform = 'none';
                        section.style.animation = 'none';
                    });
                    // 确保署名也是不透明的
                    const signature = clonedDoc.querySelector('.author-signature');
                    if (signature) {
                        signature.style.opacity = '1';
                        signature.style.transform = 'none';
                        signature.style.animation = 'none';
                    }
                }
            });
            
            // 移除临时容器
            document.body.removeChild(tempContainer);
            
            // 转换为图片并下载
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `小六壬卦象_${new Date().getTime()}.png`;
            link.href = image;
            link.click();
            
            // 提示用户
            alert('卦象果已保存为图片，请查看下载内容。');
        } catch (error) {
            console.error('生成分享图片失败:', error);
            alert('生成分享图片失败，请重试');
        }
    });

    // 绑定保存结果按钮事件
    document.getElementById('saveLostItemResult')?.addEventListener('click', () => {
        lostItemManager.saveResult();
    });
});