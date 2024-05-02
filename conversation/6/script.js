var score = 0 ; 
const conversationData = [
    {
        userName: "ชาวบ้าน",
        userText: "สำเร็จ ! ขอบใจ Theta และ นักผจญภัย ที่ทำให้การคัดแยกผักเป็นเรื่องที่ง่ายดาย",
    },
    {
        userName: "user",
        userText: "เป็นประสบการณ์ที่ดีมากเลยพี่ Theta ตอนนี้ไฟลุกสุด ๆ อยากช่วยงานอีกเยอะ ๆ เลย",
    },
    {
        userName: "ชาวบ้าน",
        userText: "เจ้าหนูนี้พูดเข้าท่า งั้นไปช่วยชาวบ้านวางแผนการเปิดร้านขายผักที",
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


