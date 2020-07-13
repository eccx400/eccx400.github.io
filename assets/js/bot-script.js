function bot_ui_ini() {
    var botui = new BotUI('help-bot');

    botui.message.add({
    delay: 800,
    content: "Hi, there111👋"
    }).then(function () {
    botui.message.add({
        delay: 1100,
        content: "這里是傳軒"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "一個充滿好奇心的藍孩子~"
        }).then(function () {
            botui.action.button({
                delay: 1600,
                action: [{
                    text: "然後呢？ 😃",
                    value: "sure"
                }, {
                    text: "少廢話！ 🙄",
                    value: "skip"
                }]
            }).then(function (a) {
                "sure" == a.value && sure();
                "skip" == a.value && end()
            })
        })
    })
    });
    var sure = function () {
        botui.message.add({
            delay: 600,
            content: "😘"
        }).then(function () {
            secondpart()
        })
    },
    end = function () {
        botui.message.add({
            delay: 600,
            content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
        })
    },
    secondpart = function () {
        botui.message.add({
            delay: 1500,
            content: "目前就讀於美國加州聖塔克拉拉大學"
        }).then(function () {
            botui.message.add({
                delay: 1500,
                content: "原本大學想申請 Biology..."
            }).then(function () {
                botui.message.add({
                    delay: 1200,
                    content: "但是後來還是決定走 Coding 的道路"
                }).then(function () {
                    botui.message.add({
                        delay: 1500,
                        content: "主攻 C/C++, Java, Python, SQL 等語言，略懂 Scala，偶爾也折騰 HTML/CSS/JavaScript"
                    }).then(function () {
                        botui.message.add({
                            delay: 1500,
                            content: "研究的方向，是成爲一名後端開發工程師 (Back-End Developer) 以及機器學習 (Machine Learning)"
                        }).then(function () {
                            botui.message.add({
                                delay: 1800,
                                content: "我對前端開發 (Front-End Development)也感興趣. 以後也想往這個方向發展~"
                            }).then(function () {
                                botui.action.button({
                                    delay: 1100,
                                    action: [{
                                        text: "你有什麽愛好嗎？ 🤔",
                                        value: "why-mashiro"
                                    }]
                                }).then(function (a) {
                                    thirdpart()
                                })
                            })
                        })
                    })
                })
            })
        })
    },
    thirdpart = function () {
        botui.message.add({
            delay: 1E3,
            content: "我喜歡跟朋友玩游戲，大部分時間都花在任天堂的大亂閙 (Super Smash Bros.)，塞爾達傳説系列 (The Legend of Zelda)，以及英雄聯盟 (LOL)"
        }).then(function () {
            botui.action.button({
                delay: 1500,
                action: [{
                    text: "除此之外呢？ 🤔",
                    value: "why-cat"
                }]
            }).then(function (a) {
                fourthpart()
            })
        })
    },
    fourthpart = function () {
        botui.message.add({
            delay: 1E3,
            content: "我也非常喜歡出去旅游！有時間的話就喜歡往外跑~~"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "從小的時候就去過很多國家，現在上大學的時候也找空開車出去玩"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "你覺得哪裏比較好玩？(ง •_•)ง",
                        value: "why-domain"
                    }]
                }).then(function (a) {
                    fifthpart()
                })
            })
        })
    },
    fifthpart = function () {
        botui.message.add({
            delay: 1E3,
            content: "emmmm，我覺得去過的地方都很有特色，各有各的好玩之處 =.= 我會把我的旅游經歷與感受記錄下來的喲！"
        }).then(function () {
            botui.message.add({
                delay: 1600,
                content: "那麽，仔細看看我的博客吧？ ^_^"
            })  
            setTimeout(function(){
            window.location.replace("https://eccx400.github.io/");
            }, 4000)
        })
    } 
}