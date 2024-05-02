var score = 0 ; 
const conversationData = [
    {
        userName: "user",
        userText: "เอ๊ะ ! ว่าแต่การวางเเผนเปิดร้านขายผักต้องใช้ความรู้เรื่องอะไรบ้างครับพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "เป็นคำถามที่ดีมาก ๆ การวางเเผนการเปิดร้านขายผักมีองค์ประกอบอลายอย่าง ไม่ว่าจะเป็นการจัดสรรเวลา การชั่งมวล บริการขนส่ง การใช้ไฟฟ้าภายใน ร้าน รวมถึงความสะอาดก่อนการจัดจำหน่าย",
    },
    {
        userName: "user",
        userText: "อย่างนี้เราต้องมีความรู้เรื่องหน่วยใช่ไหมพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "ถูกต้องเเล้ว เรามานำความรู้เรื่องหน่วยไปช่วยชาวบ้านกัน",
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


