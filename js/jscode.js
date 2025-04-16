const tax = 0.0625; //constant 
const form = document.getElementById("product-page");


const imgd1 = document.getElementById("d1");
const imgd2 = document.getElementById("d2");
const des1Button = document.getElementById("des1");
const des2Button = document.getElementById("des2");
function Highlight() {  //function
  imgd1.classList.toggle("selected", des1Button.checked); //when a design choice is selected the design class of "selected" will activate showing what design the user is choosing
  imgd2.classList.toggle("selected", des2Button.checked);  
}
Highlight();
des1Button.addEventListener("change", Highlight);
des2Button.addEventListener("change", Highlight);
document.getElementById("reset").addEventListener("click", () => {   
  imgd1.classList.remove("selected");
  imgd2.classList.remove("selected");
});

form.addEventListener("submit", Cart); //event listener

function Cart(event) {
    event.preventDefault();
    try {
      const compName = document.getElementById("compname").value;
      const email = document.getElementById("email").value;
      const lastName = document.getElementById("lastname").value;
  
      const missingFields = []; //array
  
      if (!compName) {
        missingFields.push("Company Name");
      }
      if (!email) {
        missingFields.push("Email");
      }
      if (!lastName) {
        missingFields.push("Last Name");
      }
  
      if (missingFields.length > 0) {
        throw new Error("Missing fields: " + missingFields.join(", "));
      }
  
      const sum = totalCalculation();
      console.log("Thank you for shopping at Shirts Unlimited!");
      console.log("Email:", email);
      console.log("Company Name:", compName);
      console.log("Last Name:", lastName);
      console.log("Your total is: $", sum.toFixed(2));
    } catch (error) {
      alert("Please fill out the following field(s):\n" + error.message);
    }
  }
  


function totalCalculation() {
    var sum = 0; //variable
    const type = document.querySelector('input[name="design"]:checked')?.value;
    const quantity = parseInt(document.getElementById("quantity").value) || 0;
  
    // check if Bulk or notBulk is selected
    if (document.getElementById("Bulk").checked) {
      if (document.getElementById("LS").checked) {
        sum += quantity * 350; // LS with Bulk, 350 per box + Arithmetic Operators
      } else {
        sum += quantity * 150; // Bulk without LS, 150 per box
      }
    } else if (document.getElementById("notBulk").checked) {
      if (document.getElementById("LS").checked) {
        sum += quantity * 10; // LS with notBulk, 10 per shirt
      } else {
        sum += quantity * 5; // notBulk without LS, 5 per shirt
      }
    } else if (document.getElementById("delivery").checked) {
      sum += 120; // delivery option
    } else if (document.getElementById("custom").checked) {
      sum += 150; // custom option
    } else {
      console.warn("Order type not selected");
    }
  
    
    switch (type) { //switch 
      case "des1":
        sum += quantity * 1.5; 
        break;
      case "des2":
        sum += quantity * 2; 
        break;
    }
  
    sum += sum * tax; 
    return sum;
  }
  
