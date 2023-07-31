//Create date variable
var date = new Date()
let display_date = "Date : " + date.toLocaleDateString()

//Load HTML DOC
$(document).ready(function(){
    $("#display_date").html(display_date)
})

//Define variable to store predicted emotion
let predicted_emotion

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        let input_data = {
            "text":$("#text").val()
        }
        console.log(input_data)
        //AJAX call

        $.ajax({
            type:"post",
            url:"/predict-emotion",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:"application/json",
            success:function(result)
              {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                predicted_emotion_img_url = result.data.predicted_emotion_img_url

                
                // Display Result Using JavaScript----->HTML
                ("#prediction").html(predicted_emotion)
                ("#emo_img_url").css("display","block")

               
                
            },
            //Error function
            error:function(result){
                alert(result.responseJSON.message)

               
            }
            
        });
    });
})

