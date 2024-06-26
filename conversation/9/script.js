var score = 0 ; 
const conversationData = [
    {
        userName: "user",
        userText: "ได้ความรู้มาเต็มเปี่ยมเลย นักผจญภัย พร้อมช่วยชาวบ้านต่อแล้วพี่ Theta",
    },
    {
        userName: "ชาวบ้าน",
        userText: "Theta  ! ชาวบ้านขุดพบกล่องปริศนาที่สวนแครอท ช่วยไปดูหน่อยเร็ว",
    },
    {
        userName: "Theta",
        userText: "จะน่าตื่นเต้นเกินไปแล้ว !",
    },

];

let currentConversationIndex = 0;

function displayInitialConversation() {
    // Call nextPage() to display the first conversation
    nextPage();
}

// Function to display the next conversation
function nextPage() {
    // Get the next conversation from the conversation data
    const conversation = conversationData[currentConversationIndex];
    // Check if there are more conversations
    if (conversation) {
        // Update the dialog box with the conversation data
        document.getElementById("userName").textContent = conversation.userName;
        document.getElementById("userText").textContent = conversation.userText;
        if(conversation.userName != 'user')
        {
            document.getElementById("userName").style.display = 'block';
        }
        else{
            document.getElementById("userName").style.display = 'none';
        }

        // Display the appropriate character image based on the userName
        const charImages = document.querySelectorAll('.char img');
        charImages.forEach(img => {
            if (img.alt === conversation.userName) {
                img.style.display = 'block';
            } 
            else {
                img.style.display = 'none';
            }
        });
        
        // Increment the conversation index for the next iteration
        currentConversationIndex++;
    } else {
        // เชื่อมกับหน้าหลัก
        score = 50 ; 
        setTimeout(function(){
            window.location.href = "";
        },800);
    }
}


