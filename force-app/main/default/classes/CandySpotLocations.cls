public with sharing class CandySpotLocations {
    @AuraEnabled(cacheable=true)
    public static List<Candy_Spot__c> getNearbyLocations(Decimal latitude, Decimal longitude){
        return [
            SELECT Name
            FROM Candy_Spot__c 
            WHERE DISTANCE(Location__c, GEOLOCATION(:latitude, :longitude), 'mi') < 20 
            ORDER BY DISTANCE(Location__c, GEOLOCATION(:latitude, :longitude), 'mi')
            LIMIT 10
        ];
    }
}
