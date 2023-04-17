/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-17-2023
 * @last modified by  : Anna Makhovskaya
**/
public with sharing class weatherAppController {

    @AuraEnabled
    public static string getWeatherDetails(String input){
        //const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${API_KEY}`;
        String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input  + '&units=metric'+ getKey();
        String response = getResponse(url);
        return response;
    }

    public static string  getResponse(string strUrl){
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        HttpResponse res = new HttpResponse();
        req.setMethod('GET');
        req.setEndpoint(strUrl);
        req.setTimeout(120000);
        res = h.send(req);
        String responseBody = res.getBody();
        return responseBody;
    }

    public static string getKey(){
        string key = '6d6c4fa2140b96c8d039097d7b039b85'; //System.Label.WeatherApiKey
        string output = '&appid=' + key;
        return output;
    }
}