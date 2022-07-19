function textProcessing() {
  
  {  //  =========  concat()  =========

    let greet = "Hello, ";
    let name = "John";
    let result = greet.concat(name);
    console.log(result); // Expected output: "Hello, John"
  }
  
  {  //  =========  indexOf(substring)  =========

    let str = "I am JavaScript developer";
    console.log(str.indexOf("Java")); // Expected output: 5               
    console.log(str.indexOf("java")); // Expected output: -1
  }

  {  //  =========  lastIndexOf(substring)  =========

    let str = "Intro to programming";
    let last = str.lastIndexOf("o");
    console.log(last); // Expected output: 11
  }

  {  //  ======= substring(startIndex, endIndex) =======

    let str = "I am JavaScript developer";
    let sub = str.substring(5, 10);
    console.log(sub); // Expected output: JavaS
  }

  {  //  =======  replace(search, replacement)  =======
    
    let text = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";
    let replacedText = text.replace(".bg", ".com");
    console.log(replacedText);
    // Hello, john@softuni.com, you have been using john@softuni.com in your registration.
  }

  {  //  =======  split(separator)  =======
    
    let text = "I love fruits";
    let words = text.split(' ');
    console.log(words); // Expected output: ['I', 'love', 'fruits']
  }

  {  //  =======  includes(substr)  =======
    
    let text = "I love fruits";
    console.log(text.includes("fruits")); // Expected output: true
    console.log(text.includes("banana")); // Expected output: false
  }

  {  //  =======  repeat(count)   =======
    // Creates a new string repeated count times

    let n = 3;
    for (let i = 1; i <= n; i++) {
      console.log( "*".repeat(i) );
    }

    // *
    // **
    // ***
  }

  {  //  =======  trim()  =======
     // method to remove whitespaces (spaces, tabs, no-break space, etc. ) from both ends of a string

    let text = "   Annoying spaces       ";
    console.log(text.trim()); 
    // Expected output: "Annoying spaces"
  }

  {  //  =======  trimStart() || trimEnd()  =======
    
    let text = "   Annoying spaces       ";
    text = text.trimStart();
    text = text.trimEnd();
    console.log(text); // Expected output: "Annoying spaces"
  }

  {  //  =======  startsWith()  =======
    
    let text = "My name is John";
    console.log(text.startsWith('My')); // Expected output: true  
  }

  {  //  =======  endsWith()  =======
    
    let text = "My name is John";
    console.log(text.endsWith('John')); // Expected output: true
  }

  {  //  =======  padStart()  =======
    // Use padStart() to add to the current string another substring at the start until a length is reached

    let text = "010";
    console.log(text.padStart(8, '0')); // Expected output: 00000010
  }

  {  //  =======  padEnd()  =======
    // Use padEnd() to add to the current string another substring at the end until a length is reached

    let sentence = "He passed away";
    console.log(sentence.padEnd(20, '.')); 
    // Expected output: He passed away......
  }

}
textProcessing()