(function($){

    var countChat;

    function chatAnim(){

        this.chatTexts = [{
            deleteText: 'Hey lorem ipsum',
            chatText:"Hi, I'm Ailira, your Artificially Intelligent Legal Information Research Assistant.",
            chatFrom:"me"
        }, {
            chatText:"what kind of questions should I ask you?",
            chatFrom:"other"
        }, {
            deleteText: 'Hey lorem ipsum',
            chatText:"I can help you best when you ask me questions in natural language.",
            chatFrom:"me"
        }, {
            chatText:"I can help you best when you ask me questions in natural language.",
            chatFrom:"me"
        }, {
            deleteText: 'Hey lorem ipsum',
            chatText:"what is a trust?",
            chatFrom:"other"
        }, {
            chatText:"Here's what I found",
            chatFrom:"me"
        }, {
            chatText:"A trust exists whenever legal title to real or personal property is vested in one person, called a trustee, for the benefit of another person, called a beneficiary",
            chatFrom:"other"
        }, {
            deleteText: 'Hey lorem ipsum',
            chatText:"Can the beneficiary of a bare trust claim the CGT main residence exemption?",
            chatFrom:"me"
        }, {
            chatText:"Here's what I found",
            chatFrom:"other"
        }, {
            deleteText: 'Hey lorem ipsum',
            chatText:"If a 'bare trust' exists an exemption may be available to the beneficiary where the beneficiary occupies the dwelling. This is because the CGT provisions apply to an act done by the trustee as if it were an act done by the beneficiary where the beneficiary is absolutely entitled to CGT asset",
            chatFrom:"me"
        }]

    }

    chatAnim.prototype.pushTotyped = function(counter){
        if(counter == this.chatTexts.length){
            counter = 0;
            $('.chat_main *').remove();
            this.typedAnm(counter);
        }
        else{
            this.typedAnm(counter);
        }
    }

    chatAnim.prototype.appendChat = function(chatText, chatFrom){
        if(chatFrom == 'me'){
            $('.chat_main').append('<div class="chat_row chat_me"><div class="chat_pic"><img src="pic_me.jpg" alt="pic_me" /></div><div class="chat_text"><div class="chat_text_main"><p>'+chatText+'</p></div></div></div>');
        }
        else{
            $('.chat_main').append('<div class="chat_row chat_other"><div class="chat_pic"><img src="pic_me.jpg" alt="pic_me" /></div><div class="chat_text"><div class="chat_text_main"><p>'+chatText+'</p></div></div></div>');
        }
        $('.chat_main .chat_row:last-child .chat_pic').show(0).css({'transform':'scale(1)'});
        $('.chat_main .chat_row:last-child .chat_text_main').show(0).css({'transform':'scale(1)'});
        $('.chat_main')[0].scrollTop = $('.chat_main')[0].scrollHeight;
    }

    chatAnim.prototype.typedAnm = function(counter){
        var thisChatText = this.chatTexts[counter]['chatText'];
        var thisChatFrom = this.chatTexts[counter]['chatFrom'];
        var chatText;
        var _this = this;
        if(_this.chatTexts[counter]['deleteText']){
            $("#chat_input").typed({
                strings: [_this.chatTexts[counter]['deleteText'], thisChatText],
                typeSpeed: 100,
                callback: function(){
                    chatText = $("#chat_input").text();
                    setTimeout(function(){
                        _this.appendChat(chatText, thisChatFrom);
                        $("#chat_input").text('');
                    }, 1000)

                    if(counter == 9){
                        setTimeout(function(){
                            _this.pushTotyped(counter+1);
                        }, 5000)
                    }
                    else{
                        setTimeout(function(){
                            _this.pushTotyped(counter+1);
                        }, 2000)
                    }
                    $('.typing_gif').hide();
                },
                preStringTyped: function(){
                    $('.typing_gif').show();
                }
            });
        }
        else{
            $("#chat_input").typed({
                strings: [thisChatText],
                typeSpeed: 100,
                callback: function(){
                    chatText = $("#chat_input").text();
                    setTimeout(function(){
                        _this.appendChat(chatText, thisChatFrom);
                        $("#chat_input").text('');
                    }, 1000)

                    if(counter == 9){
                        setTimeout(function(){
                            _this.pushTotyped(counter+1);
                        }, 5000)
                    }
                    else{
                        setTimeout(function(){
                            _this.pushTotyped(counter+1);
                        }, 2000)
                    }
                    $('.typing_gif').hide();
                },
                preStringTyped: function(){
                    $('.typing_gif').show();
                }
            });
        }
    }

    var chatAnimObject = new chatAnim();

    chatAnimObject.pushTotyped(0);

    setInterval(function(){
        $('.chat_input')[0].scrollLeft = $('.chat_input')[0].scrollWidth;
    }, 50)

}(jQuery));