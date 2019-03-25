console.log('JavaScript weekend REPS!');

// I. Variable & Datatypes
    // A. Q + A
        // 1. We assign a value by using const or let 
        // and the assignment operator (=)

        // 2. If we assigned a value using let we can change 
        // the variable by "assigning" it a new value. 
        // However if we used const then we must "mutate" 
        // the variable.

        // 3. let name = "Jerry";
        // (to change the value of name)
        // name = "Sharon";

        // 4. declare, assign, and define are all referring 
        // to the process of writing some code (assigning 
        // value to a variable or declaring a function) so 
        // it can be invoked or called upon throughout the code.

        // 5. pseudocoding is where you write out the code 
        // you want to put together in plain english first.
        // It is an important step as it helps to 
        // organize and set up your code. 

        // 6. I think 50% of thinking about how you're going
        // to solve a problem is sufficient. It's important
        // to make your goals clear, and I believe in a good
        // plan. Planning allows you to be open-minded and
        // organized. The other 50% of the time should be 
        // spent on executing your plan or the multiple ideas
        // you thought of.

    // B. Strings
        // 1.
        let firstVariable = "Hello World";
        firstVariable = 613;
        let secondVariable = firstVariable;
        secondVariable = "How are you?";
        console.log(firstVariable); //<= The value of firstVariable is 613

        // 2.
        let yourName = "Kaitlin";
        console.log("Hello, my name is " + yourName);
        
    // C. Booleans
    const a = 4;
    const b = 53;
    const c = 57;
    const d = 16;
    const e = 'Kevin';
  
    console.log(a < b);
    console.log(c > d);
    console.log('Name' === 'Name');
    console.log(true !== false);
    console.log(false || false || false || false || false || false || true);
    console.log(false === false)
    console.log(e === 'Kevin');
    console.log(a < b < c);
    console.log(a <= a < d);
    console.log(48 == '48');

    // D. The Farm
    let animal = 'cow'; 

    if(animal === "cow"){
        console.log("mooooo")
    } else {
        console.log("Hey! You're not a cow.");
    };

    // E. Driver's Ed
    let driverAge = 15

    if(driverAge >= 16) {
        console.log("Here are the keys")
    } else {
        console.log("Sorry, you're too young")
    };


// II. Loops
    // A. The Basics
        // 1.
    // for(let i = 0; i <= 10; i++){
    //     console.log(i);
    // };
    //     // 2.
    // for(let i = 10; i <= 400; i++){
    //     console.log(i);
    // };
    //     // 3.
    // for(let i = 12; i < 4000; i = i += 3){
    //     console.log(i);
    // };

    // B. Get Even
    // for(let i = 1; i < 100; i++){
    //     if(i % 2 === 0){
    //         console.log(i + " <-- is an even number");
    //     };
    // };

    // C. Give me Five
    // for(let i = 0; i <= 100; i++){
    //     if(i > 0 && i % 5 === 0){
    //         console.log(`I found a ${i}. High Five!`);
    //     } else if(i > 0 && i % 3 === 0){
    //         console.log(`I foung a ${i}. Three is a crowd`);
    //     };
    // };

    // D. Savings account
        // 1.
    // let bankAccount = 0;
    // for(i = 1; i <= 10; i++){
    //     bankAccount += i;
    // }
    // console.log(bankAccount); <== 55

        // 2.
    // for(i = 1; i <= 100; i++){
    //     bankAccount += i * 2;
    // }
    // console.log(bankAccount); // <== 10100

    // E. Multiples of 3 and 5
    // I've already done this problem

// III. Arrays & control flow
    // A. Talk about it:
    // 1. they are a list of values for one variable 
    // that can be stored in an ordered list as elements.

    // 2. No. The elements in an array are ordered from 
    // 0 and on, but these keys are not specifically assigned
    // to one value or element. depending on if any of 
    // the values were altered, added, or removed the 
    // 'order' or what is used to call the element can 
    // be different/changed.
    
    // 3. a cargo train. each container can hold different
    // things, but are all apart of the same train.
    
    // B. Easy Does it
    let quotes = [
        "Be the change you wish to see in the world. - Mahatma Gandhi", 
        "With the new day comes new strength and new thoughts. - Eleanor Roosevelt", 
        "Be kind whenever possible. It is always possible. - Dalai Lama",
        "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
        "If you can dream it, you can do it - Walt Disney"
    ];

    // C. Accessing elements
    const randomThings = [1, 10, 'Hello', true];
    // 1.
    console.log(randomThings[0]);
    // 2.
    randomThings[2] = 'World'
    // 3.
    console.log(randomThings);

    // D. Change Values
    const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
    // 1.
    console.log(ourClass[2]);
    // 2. 
    ourClass[4] = "Octocat";
    // 3. 
    ourClass.push("Cloud City");
    console.log(ourClass);

    // E. Mix It Up
    const myArray = [5, 10, 500, 20];
    // 1. 
    myArray.push("Egon");
    myArray.push("Beats");
    // 2.
    myArray.shift();
    // 3.
    myArray.unshift("Bob Marley");
    // 4.
    myArray.pop();
    // 5. Mutate refers to altering a const variable
    myArray.reverse();
    console.log(myArray); // <== ["Egon", 20. 500, 10, "Bob Marley"]

    // F. Biggie Smalls
    const integer = 250;
    if(integer < 100){
        console.log("little number")
    } else {
        console.log("big number");
    };

    // G. Monkey in the Middle
    const num = 8;
    if(num < 5){
        console.log("little number")
    } else if(num > 10){
        console.log("big number");
    } else {
        console.log("monkey");
    };

    // H. What's in Your Closet
    const kristynsCloset = [
        'left shoe',
        'cowboy boots',
        'right sock',
        'GA hoodie',
        'green pants',
        'yellow knit hat',
        'marshmallow peeps'
      ];
      
      // Thom's closet is more complicated. Check out this nested data structure!!
      const thomsCloset = [
        [
          // These are Thom's shirts
          'grey button-up',
          'dark grey button-up',
          'light blue button-up',
          'blue button-up'
        ],
        [
          // These are Thom's pants
          'grey jeans',
          'jeans',
          'PJs'
        ],
        [
          // Thom's accessories
          'wool mittens',
          'wool scarf',
          'raybans'
        ]
      ];
    // 1.
    console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
    // 2.
    kristynsCloset.splice(6,0,"raybans");
    console.log(kristynsCloset);
    // 3.
    kristynsCloset[5] = "stained knit hat";
    console.log(kristynsCloset[5]);
    // 4.
    console.log(thomsCloset[0][0]);
    // 5. 
    console.log(thomsCloset[1][1]);
    // 6. 
    console.log(thomsCloset[2][2]);
    // 7.
    console.log(`Thom looks great in that ${thomsCloset[0][0]} and ${thomsCloset[1][1]}! Also, his ${thomsCloset[2][2]} really complete his outfit.`);
    // 8.
    thomsCloset[1][2] = 'Footie Pajamas';
    console.log(thomsCloset[1]);

// IV. Functions
    // A. printGreeting <-- Have already done this problem twice 

    // B. printCool
    const printCool = (name) => {
        console.log(`${name} is cool!`);    
    } 
    printCool('Captain Reynolds');

    // C. calculateCube
    const calculateCube = (num) => {
        return Math.pow(num,3);
    }
    console.log(calculateCube(5));

    // D. isVowel
    const isVowel = (str) => {
        let x = str.toLowerCase()
        if(x.length === 1 && x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
            return true;
        } else {
            return false;
        };
    }
    
    console.log(isVowel('a'));
    console.log(isVowel('l'));
    console.log(isVowel('E'));

    // E. getTwoLengths
    const getTwoLengths = (str1, str2) => {
        let array = [str1, str2];
        let newArray = [];
        for(i = 0; i < array.length; i++){
            newArray.push(array[i].length);
        };
        return newArray;
    };

    console.log(getTwoLengths('Hank', 'Hippopopalous'));

    // F. getMultipleLengths
    const getMultipleLengths = (array) => {
        let newArray = [];
        for(i = 0; i < array.length; i++){
            newArray.push(array[i].length);
        };
        return newArray;
    };

    console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));

    // G. maxOfThree
    const maxOfThree = (num1, num2, num3) => {
        if(num1 >= num2 && num1 >= num3){
            console.log(num1);
        } else if(num2 >= num1 && num2 >= num3){
            console.log(num2);
        } else {
            console.log(num3);
        };
    }

    maxOfThree(6,9,1);
    maxOfThree(12,5,20);
    maxOfThree(4,4,3);

    // H. printLongestWord
    const printLongestWord = (array) => {
        let answerArray = [array[0]];
        for(i = 1; i < array.length; i++){
            if(array[i].length > answerArray[0].length){
                answerArray.pop();
                answerArray.push(array[i])
            };
        };
        return answerArray;
    };
    
    console.log(
        printLongestWord([
        'BoJack',
        'Princess',
        'Diane',
        'a',
        'Max',
        'Peanutbutter',
        'big',
        'Todd'
        ])
    );

    console.log(printLongestWord(['bubblegum', 'rainbow', 'northwestern']));

    // I. transmogrify
    const transmogrify = (num1, num2, num3) => {
        let product = num1 * num2;
        return Math.pow(product, num3);
    };

    console.log(transmogrify(5, 3, 2));
    console.log(transmogrify(7, 9, 4));

    // J. reverseWordOrder
    const reverseWordOrder = (str) => {
        let newArray = []
        for(i = str.length - 1; i >= 0; i--){
        }
    }

    // K. Get down and dirty with Math.random
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    };
    // 1.
    console.log(randomNum(1, 10));

    // 2.
    console.log(randomNum(10, 100));

    // 3.
    console.log(randomNum(532, 13267));

    // 4.
    console.log(randomNum(1, 10));

    // 5.
    const getRandomElement = (array) => {
        return array[Math.floor(Math.random() * (5 - 0) + 0)]
    };

    console.log(getRandomElement(quotes));

// Objects
    // A. Make a user object
    const user = {
        name: 'Heather Roth',
        email: 'hroth@gmail.com',
        age: 35,
        purchased: []
    };

    // B. Update the User
    // 1.
    user.email = 'heatherr@gmail.com';

    // 2.
    user.age++

    console.log(user);

    // C. Adding keys and values
    user.location = 'Colorado';
    console.log(user);

    // D. Shopaholic!

    


