//to run npm run dev
module.exports = function (bot) {
    
    //General Greeting
    bot.hear(/Hello/i, function(res){
        return res.send('Hello! I am RunBot.')
    })

    //Shows what RunBot can respond to
    bot.hear(/Help/i, function(res){
        return res.reply('This is what I can respond to (Options):\nWhat is your favorite event\nWhat is your favorite exercise\nWhat is your favorite color\nWhat is your favorite food\nWhat is the best weather for running\nWhat is the difference between sprinters and distance runners\nWhat can I do for strength\nWhat can I do for stretching\n\nHow often should I train (running/ strength/ stretching)\nTell me how to increase my (mileage/VO2/Lactic threshold)\nGive me a workout for (sprinters/ mid distance/ long distance)\n\nDescribe (vo2/ lactic threshold/ lactic acid)\nGive me a motivational quote\n\nMy fastest mile is (x) minutes\nI placed (x) in a race\n\nWhat is the wr for (400m/ mile/ 10k/ marathon)?')
    })

    //Get to know RunBot's favorite things!
    bot.hear(/What is your favorite (.*)/i, function(res){
        let subject = res.match[1]
        switch (subject){
            case 'event':
                return res.send('My favorite event is the maraton!')
                break
            case 'exercise':
                return res.send('My favorite exercise is the infamous burpee!')
                break
            case 'color':
                return res.send('Blue!')
                break
            case 'food':
                return res.send('My favorite food is the best recovery snack, a chocolate milkshake!')
                break
            default:
                return res.send(`I don't have a favorite ${subject}`)
        }
    })

    //Simple one line questions or statements with no options
    //Optimal weather conditions
    bot.hear(/What is the best weather for running/i, function (res){
        return res.send('A cool 55°F. Ideally it will be a clear day with no high winds.')
    })

    //Differences between runners
    bot.hear(/What is the difference between sprinters and distance runners/i, function (res){
        return res.send('Sprinters are more muscular. Typically they have more fast twitch muscle fibers. These fibers are for big powerful movements, but fatigue quickly.\n\nDistance runners are more thin in stature. Typically they have more slow twitch muscle fibers. These fibers are for sustained smaller movements, and they are resistant to fatigue.')
    })

    //Strength
    bot.hear(/What can I do for strength/i, function (res){
        return res.send(`Balance is everything when strength training. Don't neglect any part of your body. This is especially true for your core. Your core includes the: abdominals, glutes, chest, and hips.`)
    })

    //Stretching
    bot.hear(/What can I do for stretching/i, function (res){
        return res.send(`Anything that feels tight or sore can benefit from a good stretch. For runners it is important to keep the lower body stretched out. This includes your: legs, hip flexors, and glutes. Don't neglect the spine. The spine can compress during everyday life. This can have impacts on your running form causing problems further down the road.`)
    })

    //You ran a fast mile time!
    bot.hear(/My fastest mile is in (.*) minutes/i, function (res){
        let time = parseInt(res.match[1])
        if (time <= 5){
            return res.send('You must be a professional runner!')
        }else if(time <= 8 ){
            return res.send(`Holy cow you're fast!`)
        }else if (time >= 9){
            return res.send('That is a great start! I bet you coul do better!')
        }else {
            return res.send(`I'm not sure you entered a correct time...`)
        }

    })
    
    //You placed in a race!
    bot.hear(/I placed (.*) in a race/i, function (res){
        let place = parseInt(res.match[1])
        if (place === 1){
            return res.send('Winner Winner Chicken Dinner!')
        }else if(place === 2){
            return res.send(`If you ain't first, you're last`)
        }else if(place >= 3){
            return res.send('Better luck next time!')
        }else{
            return res.send('Sorry can you repeat that?')
        }
    })
    
    //more complex questions with multiple options
    //Training frequency
    bot.hear(/How often should I train (.*)/i,function (res){
        let subject = res.match[1]
        switch (subject){
            case 'running':
                return res.send('If you are starting out, 3 days a week is sufficient.\nIf you are experienced, 5 days a week is sufficient.\nIf you are very experienced, 6 - 7 days a week is sufficient.')
                break
            case 'strength':
                return res.send('Strength training should be done 3-4 days a week to help maintain or grow your strength.')
                break
            case 'stretching':
                return res.send('Stretching can be done every day. However only 3 - 4 days a week is necessary.')
                break
            default:
                return res.send(`I'm not familiar with ${subject}. Try running, strength, or stretching.`)
        }
    })

    //Ask for a workout depending on distance
    bot.hear(/Give me a workout for (.*)/i,function (res){
        let subject = res.match[1]
        switch (subject){
            case 'sprinters':
                return res.send('10x 400m Hill repeats!')
                break
            case 'mid distance':
                return res.send('6x 1 mile repeats.')
                break
            case 'long distance':
                return res.send('15 mile run at a slow pace.')
                break
            default:
                return res.send(`I'm not familiar with ${subject}. Try sprinters, mid distance, or long distance.`)
        }
    })

    //Ask for training methods to increase specifc abilites
    bot.hear(/Tell me how to increase my (.*)/i,function (res){
        let subject = res.match[1]
        switch (subject){
            case 'mileage':
                return res.send('The safest way to increase weekly mileage is with the 10% rule. Take your previous mileage and add 10% to it. For example you ran 20 miles last week. Your next weekly mileage would then be 22 miles.')
                break
            case 'vo2':
                return res.send('VO2 max improves when you are running at 95-100% of your ability. Doing sprint repeats of 400m will increase your VO2. This will take 2 - 3 weeks before your body adapts.')
                break
            case 'lactic threshold':
                return res.send('Similar to VO2, lactic threshold improves when you are near your maximum effort 85-90%. Doing repeats from 400m to a 1600m will increase your lactic threshold. This will take 2 - 3 weeks before your body adapts.')
                break
            default:
                return res.send(`I'm not familiar with ${subject}. Try mileage, VO2, or lactic threshold.`)
        }
    })

    //Describe these for me pal!
    bot.hear(/describe (.*)/i, function(res){
        let topic = res.match[1]
        switch (topic){
            case 'vo2':
                return res.send('VO2 max is the maximum rate of oxygen that your body consumes during exercise. A higher VO2 max means your body can consume more oxygen and use it more effectively.')
                break
            case 'lactic threshold':
                return res.send('Lactic threshold is the point during intense exercise when lactic acid builds up faster than your body can remove it.')
                break
            case 'lactic acid':
                return res.send('Lactic acid is a chemical that builds up over time in the body during exercise. It causes the muscles to fatigue more and more as the execise continues.')
                break
            default:
                res.send(`I don't know what ${topic} is. Can you teach me?`)
        }
    })
    
    //Motivation you seek
    bot.hear(/give me a motivational quote/i, function(res){
        let num = Math.random()
        if (num >= 0.75){
            return res.send('Only the disciplined ones in life are free. If you are undisciplined, you are a slave to your moods and your passions.\n\n      -Eliud Kipchoge')
        }else if (num >= 0.50){
            return res.send('There is nothing deep down inside us except what we have put there ourselves.\n\n      -Richard Rorty')
        }else if(num >= 0.25){
            return res.send(`If one can stick to the training throughut the many long years, then willpower is no longer a problem. It's raining? That doesn't matter. I'm tired? That's besides the point. It's simply that I just have to.\n\n      -Emil Zatopek`)
        }else{
            return res.send(`It always seems impossible until it's done\n\n      -Nelson Mandela`)
        }
    })
    
    /***Need to implement What is the wr for (distance)? */
}