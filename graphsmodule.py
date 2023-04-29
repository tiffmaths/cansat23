##Created by Tiffany Igharoro on the 28/03/2023

import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

#plt.style.use('dark_background')

#windows --> raw_csv_data = pd.read_csv("C://Users//name//data23.csv") 
raw_csv_data = pd.read_csv("/Users/name23-CANSAT/yorkdata.csv")

#turning imported data into an array
myarray = raw_csv_data.to_numpy()

#creating an array for each of the parameters

tempvalues = []
for i in myarray:
    try:
        tempvalues.append(float(i[0]))
    except:
        pass
#dataframetemp = pd.DataFrame(tempvalues)
#dataframetemp.to_csv("Temperature Data Points")

pressvalues = []
for i in myarray:
    try:
        pressvalues.append(float(i[1]))
    except:
        pass
#dataframepress = pd.DataFrame(pressvalues)
#dataframepress.to_csv("Pressure Data Points")

humvalues = []
for i in myarray:
    try: 
        humvalues.append(float(i[2]))
    except:
        pass
#dataframehum = pd.DataFrame(humvalues)
#dataframehum.to_csv("Humidity Data Points")

altvalues = []
for i in myarray:
    try:
        
        altvalues.append(float(i[3]))
    except:
        pass
#dataframealt = pd.DataFrame(altvalues)
#dataframealt.to_csv("Altitude Data Points")

co2values = []

for i in myarray:
    try:
        
        co2values.append(float(i[4]))
    except:
        pass

no2values = []

for i in myarray:
    try:
        
        no2values.append(float(i[5])*65)
    except:
        pass

organic_compoundvalues = []

for i in myarray:
    try:
        
        organic_compoundvalues.append(float(i[6])*0.06614)
    except:
        pass

#dataframeco2 = pd.DataFrame(co2values)
#dataframeco2.to_csv("CO2 Data Points")

tvs = list ( range ( 1 ,len(tempvalues) ) )

fig = plt.figure(figsize=(15,15))


x, y = [], []

#animated graphs functions
def animate_temp(i):
    if i < len(tvs):
        x.append(tvs[i])
    else:
        pass
    if i < len(tvs):

        y.append((tempvalues[i]))
    else:
        pass

    plt.plot(x,y, scaley=True, scalex=True, color="red")
   

def animate_press(i):
    if i < len(tvs):
        x.append(tvs[i])
    else:
        pass
    if i < len(tvs):

        y.append((pressvalues[i]))
    else:
        pass

    plt.plot(x,y, scaley=True, scalex=True, color="red")
   

def animate_hum(i):
    if i < len(tvs):
        x.append(tvs[i])
    else:
        pass
    if i < len(tvs):

        y.append((humvalues[i]))
    else:
        pass

    plt.plot(x,y, scaley=True, scalex=True, color="red")
 

def animate_alt(i):
    if i < len(tvs):
        x.append(tvs[i])
    else:
        pass
    if i < len(tvs):

        y.append((altvalues[i]))
    else:
        pass

    plt.plot(x,y, scaley=True, scalex=True, color="red")

def animate_co2(i):
    if i < len(tvs):
        x.append(tvs[i])
    else:
        pass
    if i < len(tvs):

        y.append((co2values[i]))
    else:
        pass

    plt.plot(x,y, scaley=True, scalex=True, color="red")

def animate_no2(i):
    if i < len(tvs):
        x.append(tvs[i])
    else:
        pass
    if i < len(tvs):

        y.append((no2values[i]))
    else:
        pass

    plt.plot(x,y, scaley=True, scalex=True, color="red")

def animate_organic_compound(i):
    if i < len(tvs):
        x.append(tvs[i])
    else:
        pass
    if i < len(tvs):

        y.append((organic_compoundvalues[i]))
    else:
        pass

    plt.plot(x,y, scaley=True, scalex=True, color="red")


def plot_temp():

    fig = plt.figure(figsize=(12,8))
    axes = fig.add_subplot(1,1,1)
    fig.suptitle('Temperature over time')
    plt.xlabel('TIME/s')
    plt.ylabel('TEMPERATURE/ C')

    ani = FuncAnimation(fig, animate_temp, interval=100)
    plt.show()

def plot_press():
    fig = plt.figure(figsize=(12,8))
    axes = fig.add_subplot(1,1,1)
    fig.suptitle('Pressure over time')
    plt.xlabel('TIME/s')
    plt.ylabel('PRESSURE/ KPA')

    ani = FuncAnimation(fig, animate_press, interval=100)
    plt.show()

def plot_hum():
    fig = plt.figure(figsize=(12,8))
    axes = fig.add_subplot(1,1,1)
    fig.suptitle('Humidity over time')
    plt.xlabel('TIME/s')
    plt.ylabel('HUMIDITY/ dew lvs')

    ani = FuncAnimation(fig, animate_hum, interval=100)
    plt.show()

def plot_alt():
    fig = plt.figure(figsize=(12,8))
    axes = fig.add_subplot(1,1,1)
    fig.suptitle('Altitude over time')
    plt.xlabel('TIME/s')
    plt.ylabel('ALTITUDE/ KM')

    ani = FuncAnimation(fig, animate_alt, interval=100)
    plt.show()

def plot_co2():
    fig = plt.figure(figsize=(12,8))
    axes = fig.add_subplot(1,1,1)
    fig.suptitle('CO2 concentration over time')
    plt.xlabel('TIME/s')
    plt.ylabel('CO2 conc/ ppm')

    ani = FuncAnimation(fig, animate_co2, interval=100)
    plt.show()

def plot_no2():
    fig = plt.figure(figsize=(12,8))
    axes = fig.add_subplot(1,1,1)
    fig.suptitle('NO2 concentration over time')
    plt.xlabel('TIME/s')
    plt.ylabel('CO2 conc/ ppm')

    ani = FuncAnimation(fig, animate_no2, interval=100)
    plt.show()

def plot_organic_compound():
    fig = plt.figure(figsize=(12,8))
    axes = fig.add_subplot(1,1,1)
    fig.suptitle('Volatile Organic Compounds over time')
    plt.xlabel('TIME/s')
    plt.ylabel('Organic Compound conc/ ppm')

    ani = FuncAnimation(fig, animate_organic_compound, interval=100)
    plt.show()

mean_temp = np.mean(tempvalues) 
mean_altitude = abs(np.mean(altvalues))
mean_pressure = abs(np.mean(pressvalues))
mean_co2 = abs(np.mean(co2values))
mean_no2 = abs(np.mean(no2values))

percentage_humidity  = abs(np.mean(humvalues))/2 #mean humidity divided by average dew point in march
atmospheric_pressure = 101000 #in pascals 
factors = []
survival = True

def habitability_check():
    if percentage_humidity > 50 and mean_temp > 35:
        survival = False
        factors.append(" Humidity & temp too high: " + str(percentage_humidity + mean_temp))
    elif percentage_humidity < 5 and mean_temp < 0:
        survival = False 
        factors.append(" Humidity & temp too low: " + str(percentage_humidity + mean_temp))
    elif mean_altitude > 18300:
        survival = False
        factors.append(" Altitude too high: " + str(mean_altitude))
    elif mean_pressure > 205000: #pressure causing planet to not be habitable
        survival = False
        factors.append(" Pressure too high: " + str(mean_pressure))
    elif mean_co2/100000000 > 0.1:
        survival = False
        factors.append("CO2 too high!" + str(mean_co2))
    elif mean_no2/100000000> 0.1:
        survival = False
        factors.append("NO2 too high!" + str(mean_no2))
    else:
        survival = True 

    if survival == True:
        print("This planet is habitable")
    else:
        print("Human life would not be able to survive indefintely on this planet because of the following factors:")
        print(factors)

def percentage_habitability():
   hum =  (percentage_humidity+mean_temp)/85
   alt = (mean_altitude/18300)
   press = (mean_pressure)/205000
   co2 = (mean_co2/100000000 )/0.1
   no2 = (mean_no2/100000000)/0.1
   print(1-((hum + alt + press + co2 + no2)))

