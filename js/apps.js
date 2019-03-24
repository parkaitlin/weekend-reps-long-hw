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
    let quotes = ["Be the change you wish to see in the world - Mahatma Gandhi", "With the new day comes new strength and new thoughts - Eleanor Roosevelt", "Be kind whenever possible. It is always possible - Dalai Lama"];

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










    


