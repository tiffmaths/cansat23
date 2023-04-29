#Created by Tiffany Igharoro on 24/04/2023
import pandas as pd
import numpy as np
import matplotlib
import seaborn as sns 
import csv 
#got csv file from https://worldpopulationreview.com/countries/cities/united-kingdom


#converting csv files to numpy arrays 
london_data = pd.read_csv("/Users/name/23-CANSAT/data23.csv").to_numpy()
essex_data = pd.read_csv("/Users/name/23-CANSAT/fieldtest.csv").to_numpy()
york_data = pd.read_csv("/Users/name/23-CANSAT/yorkdata.csv").to_numpy()


#isolating the data 

londonco2values = []

for i in london_data:
    try:
        
        londonco2values.append(float(i[4]))
    except:
        pass

londonco2values.pop()
essexco2values = []

for i in essex_data:
    try:
        
        essexco2values.append(float(i[4]))
    except:
        pass

yorkco2values = []

for i in york_data:
    try:
        
        yorkco2values.append(float(i[4]))
    except:
        pass

#creating dictionaries so I can link the cities to the populations
town_data_csv = pd.read_csv("/Users/name/23-CANSAT/towndata.csv")
town_data = town_data_csv.to_numpy()
towndict = {}
numdict = {}
num2town = {}
for i in range (0,400):
    towndict[town_data[i][0]] = town_data[i][2]

for i in range (0,400):
    numdict[i] = town_data[i][2]

for i in range (0,400):
    num2town[i] = town_data[i][0]


# lower bound predictions 
#note i removed the upper bound predictions so results will not be calibrated 
southwark = 317256 #https://www.google.com/search?q=population+fo+southwark&client=safari&rls=en&sxsrf=APwXEdcM_0gGNk2LCyOOztUcscj2CXAkNA%3A1682497652674&ei=dOBIZP_ZKLKCkdUPy7iQqAo&ved=0ahUKEwj_47CXkMf-AhUyQaQEHUscBKUQ4dUDCA4&uact=5&oq=population+fo+southwark&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIMCAAQDRCABBBGEPsBMgcIABANEIAEMgYIABAWEB4yCAgAEIoFEIYDOgcIIxDqAhAnOg0IABCPARDqAhC0AhgBOhYILhCPARCaAxCbAxCoAxDqAhC0AhgBOhMILhCPARCoAxCkAxDqAhC0AhgBOhMILhCPARCaAxCoAxDqAhC0AhgBOhMILhCPARCbAxCoAxDqAhC0AhgBOgQIIxAnOggIABCKBRCRAjoHCAAQigUQQzoLCAAQgAQQsQMQgwE6CggAEIoFELEDEEM6CggAEIoFEMkDEEM6DQgAEIoFELEDEMkDEEM6CggAEIAEEBQQhwI6BQgAEIAEOgcIIxCxAhAnOg0IABCABBCxAxCDARAKOgwIABCABBAKEEYQ-wE6BwgAEIAEEApKBAhBGABQmwpYgCZgvihoAXABeACAAbABiAHPFJIBBDMuMjCYAQCgAQGwARTAAQHaAQYIARABGAo&sclient=gws-wiz-serp
co2dict = {}
new_list1 = []
for i in range(0,400):
    val_decide = []
    val_dict = {}
    lon =  abs(numdict[i]-southwark)
    york = abs(numdict[i]-towndict["York"])
    chelm = abs(numdict[i]-towndict["Chelmsford"])
    val_decide.append(lon)
    val_decide.append(york)
    val_decide.append(chelm)
    decide = min(val_decide)
 

    if decide == lon:
        co2dict[num2town[i]] = abs(np.mean(londonco2values)) * (numdict[i]/southwark) 
        new_list1.append(abs(np.mean(londonco2values)) * (numdict[i]/southwark))
    elif decide == york:
       co2dict[num2town[i]] = abs(np.mean(yorkco2values))  * (numdict[i]/towndict["York"])
    elif decide == chelm:
        co2dict[num2town[i]] = abs(np.mean(essexco2values))  * (numdict[i]/towndict["Chelmsford"])
        new_list1.append(abs(np.mean(essexco2values))  * (numdict[i]/towndict["Chelmsford"]))



#predicted value for york 561
#real value 568 


#adding column to new csv
def col_csv(csvfile,fileout,new_list):
    with open(csvfile, 'r') as read_f, \
        open(fileout, 'w', newline='') as write_f:
        csv_reader = csv.reader(read_f)
        csv_writer = csv.writer(write_f)
        i = 0
        for row in csv_reader:
            try:
                row.append(new_list[i])
                csv_writer.writerow(row)
                i += 1 
            except:
                pass


col_csv('towndata.csv','final-output.csv',new_list1)

