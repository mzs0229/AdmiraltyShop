import {Config} from 'config.js'

class Token
{
    constructor(){
        this.verifyUrl = Config.restUrl + 'token/verify';
        this.tokenUrl = Config.restUrl + 'token/user';
    }

    verify(){
        var token = wx.getStorageSync('token');
        if(!token){
            this.getTokenFromServer();  
        }else{
           this._verifyFromServer(token); 
        }
    }

    _verifyFromServer(token){
        var that = this;
        wx.request({
            url:that.verifyUrl,
            method:'POST',
            data:{token:token},
            success:function(res){
                var valid = res.data.isValid;
                if(!valid){
                    that.getTokenFromServer();
                }
            }
        })
    }

    getTokenFromServer(callBack){
        var that = this;
        wx.login({
            success:function(res){
                wx.request({
                    url: that.tokenUrl,
                    data: {code:res.code},
                    method: 'POST',
                    success: function(res){
                        wx.getStorageSync('token',res.data.token);
                        callBack && callBack(res.data.token);
                    }
                });
            }
        })
    }
}

export {Token};