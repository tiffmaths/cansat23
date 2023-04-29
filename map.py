#Created by Tiffany Igharoro on 24/04/2023

import folium 
import pandas as pd 

town_data= pd.read_csv("/Users/name/23-CANSAT/final-output.csv")

print(town_data.head())


center = [town_data['latitude'].mean(), town_data['longitude'].mean()]
mymap = folium.Map(location=center, zoom_start=8)
for index, loc in town_data.iterrows():
    location = [town_data['latitude'], town_data['longitude']]
for i in range(0,len(town_data)):
   folium.Marker(
      location=[town_data.iloc[i]['latitude'], town_data.iloc[i]['longitude']],
      #popup=town_data.iloc[i]['city'], 
      popup = town_data.iloc[i]['city'] + '  Predicted CO2 Data: ' + town_data.iloc[i]['fill'] + ' ppm',
   ).add_to(mymap)

mymap.save('index.html')