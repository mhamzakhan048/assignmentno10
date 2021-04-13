// var a = ["M.Hamza" ]
// var b = ["Assignment no 10"]
// var c = [ ]

// document.write(a + "<br>");
// document.write(b + "<br>");
// document.write(c + "<br>");


// var a = [" 0 " , " 1 " ," 2 " , " 3 "]
// var b = [" 1 " , " 0 " , " 1 " , " 2 "]
// var c = [" 2 " , " 1 " , " 0 " ,  " 1 " ]

// document.write(a.join( " " ) + "<br> <br>");
// document.write(b.join( " " ) + "<br> <br>");
// document.write(c.join( " " ) + "<br> <br>");


// for (var a = 1; a <= 10; a++) {
//     document.write(a + "<br>")
// }


// var multab = +prompt(   " Enter a Number to show its  MULTIPLICATION TABLE ")
// var lentab = +prompt(" Enter Multiplication Table Lenght"  )

// document.write(  " <b> Your Multicaption Table </b> " + multab +  "<br>")
// document.write(" <b> Your Lenght is table </b> " + lentab + "<br>")
// for (var a = 1; a <= lentab; a++) {
//     document.write(multab + " * " + a + " = " + a * multab + "<br>")
// }


// var fruits = ["apple","banana","mango","orange","strawberry"];
// for ( var a=0;a <=4;a++){
//     document.write(fruits[a] + "<br>")
// }

// var a = ["index 0"]
// var b = ["index 1"]
// var c = ["index 2"]
// var d = ["index 3"]
// var e = ["index 4"]

// document.write( " Element at " + a + " is " +first+  "<br>" , " Element at " + b + " is " +sec+  "<br>" , " Element at " + c + " is " +thrd+  "<br>" , " Element at " + d + " is " +frth+ "<br>" , " Element at " + e + " is " +fth );


// document.write("Counting : " + "<br>" + "<br>" )
// for (var a = 1; a <= 15; a++) {
//     document.write(a+" , ")
// }

// document.write("Reverse Counting : " + "<br>" + "<br>" )
// for (var a = 10; a <= 1; a) {
//     document.write(a + " , ")
// }
// var b = "10,9,8,7,6,5,4,3,2,1,";
// document.write(b)

// document.write("Even : " + "<br>" + "<br>" )
// var a = [" 0 ", " 2 ", " 4 ", " 6 ", " 8 ", " 10 ", " 12 ", " 14 ", " 16 ", " 18 ", " 20 "
// ]; 
// document.write(a +" , ")


// document.write("Odd : " + "<br>" + "<br>" )
// var b = [" 1 ", " 3 ", " 5 ", " 7 ", " 9 ", " 11 ", " 13 ", " 15 ", " 17 ", " 19 "]; 
// document.write(b +" , ")


// document.write("Series : " + "<br>" + "<br>" )
// var b = [" 2 k ", " 4 k ", " 6 k ", " 8 k ", " 10 k ", " 12 k  ", " 14 k ", " 16 k ", " 18 k ", " 20 k "]; 
// var c = "k";
// document.write(b + c +" , ")

// var a = ["cake","apple pie","cookie","chips","patties"];
// var sea  = prompt("Welcome to khan bakery");
// var right = true
// for (var i=0; i<a.length;i++){
//     if (sea==a[i]){
//         right = false
//         document.write(sea + " is avalaible in our bakery");
//     }
// }
// if (right==true){
//     document.write(sea + " is not avalaible in our bakery");
// }


// var arr = [24, 53, 78, 91, 12];
// document.write("Array items: "+arr+"<br>")
// arr.sort();
// document.write("The Smallest number is: "+arr[0]);

//  var arr = [24, 53, 78, 91, 12];
//  document.write("Array items: "+arr+"<br>")
//  arr.sort();
//  arr.reverse();
//  document.write("The Largest number is: "+arr[0]);

// var number = 5;
// for (var i=1;i<=10;i++){
//     document.write(i*number+",");
// }

// chapter 21-25 "STRING METHODS"

// var firstName = prompt("Enter your first name "); 
// var lastName = prompt("Enter your last name "); 
// var fullName = (firstName + " " + lastName);  
// document.write(" Hello......! " + fullName + "<br>" + " Have a Nice Day. ");

// var favPhone = prompt("Favourite Phone: "); //Samsung galaxy Note10
// var l = favPhone.length;
// document.write("My Favorite phone is: " + favPhone + "<br>" + "String length is: " + l);

// var count = "Pakistani"
// var i = count.indexOf("n");
// document.write("String: " + count + "<br>" + "Index of 'n' is: " + i);

// var a = "Hello World"
// var i = a.lastIndexOf("l");
// document.write("String: " + a + "<br>" + "Last index of 'l' is: " + i);

// var count = "Pakistani"
// var ch = count.charAt(3);
// document.write("String: " + count + "<br>" + "Character at Index is 3: " + ch);

// var firstName = prompt("Enter your first name: "); 
// var lastName = prompt("Enter your last name: "); 
// var fullName = firstName.concat(lastName);
// document.write(" Hello ! " + fullName + "<br>" + " Have a nice day. ");

// var city = "Hyderabad";
// var r = city.replace("Hyder","Islam");
// document.write("String: " + city + "<br>" + "After replacement: " + r);

// var message = 'Hamza and Sami are best friends.They play cricket and football together.';
// var newStr = message.replace('and','&');
// document.write(newStr);

// var a="472";
// document.write("Value: "+a+"<br>")
// document.write("Type: " +typeof(a)+"<br>");
// var b=Number(a);
// document.write("Value: "+b+"<br>")
// document.write("Type: " +typeof(b)+"<br>");


// var a=prompt("Enter the word you want to convert into uppercase");
// document.write("User Input: "+a+"<br>");
// var b= a.toUpperCase();
// document.write("Upper Case: "+b+"<br>");

// var a="javascript"
// document.write(a[0].toUpperCase() + a.slice(1,a.length).toLowerCase());

// var a=35.36;
// var b=Number(a.toString().replace('.', ''))
// var c=b.toString();
// document.write(typeof(a)+" : "+a+"<br>");
// document.write(typeof(c)+" : "+c+"<br>");

// var userName=prompt("Enter your username: ");
// var message;
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("Please enter a valid username");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }


// }
// alert(message);

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var c = prompt("Welcome to khan Bakery want do you want to order Sir/Ma'am");
// var b = c.toLowerCase();
// var d = a.includes(b);
// if(d == true){
//     alert(b+" is availible at index "+a.indexOf(b)+" in our bakery")
// }
// else{
//     alert("We are Sorry. "+b+" is not in our bakery")
// }

// var password = prompt("Password: ");
// var ind = password.charCodeAt(0);
// if (((ind >=65 && ind<=90) || (ind >=97 && ind<=122)) && (password.length>6)){
//     document.write("Correct Password");
// }else{
//     document.write("Password is not Correct");
// }


// var university = 'University of Karachi';
// array=university.split("")
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]+"<br>");
// }


// var word=prompt("Please Enter a Word?");
// lastchar=word.charAt(word.length-1)
// document.write("User Input: "+word+"<br>")
// document.write("Last Character Of Input: "+lastchar)


// var text="The quick brown fox jumps over the lazy dog"
// document.write("Text: "+text+"<br>")
// text=text.toLowerCase()
// textarr=text.split(" ")
// a=0
// word="the"
// for (let i = 0; i < textarr.length; i++) {
//     if (textarr[i]===word) {
//         a=a+1;
//     }}
// document.write("There are "+a+" occurrence(s) of word:"+word);


// ENd