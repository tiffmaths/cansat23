#Created by Tiffany Igharoro 01/04/2023
from graphsmodule import plot_temp, plot_press, plot_hum, plot_alt, plot_co2, habitability_check
from tkinter import *
import tkinter.ttk as ttk

#002B36 bg
#bc951a yellow
#94a2a4 grey
#3f98d7 blue
#44aca4 green
#d05e2f red
#d95092 pink

#GUI construction
class MainWindow():

    def __init__(self, win):

        self.menulabel=Label(win,text="MENU", fg='white', font=("Rosewood Std Regular", 50), bg = '#d05e2f')
        self.tempbutton=Button(win, text ="TEMPERATURE",font=("Rosewood Std Regular", 30), fg='#bc951a', command=self.clickTempButton)
        self.pressbutton=Button(win, text="PRESSURE", font=("Rosewood Std Regular", 30), fg='#bc951a', command=self.clickPressButton)
        self.altbutton=Button(win, text="ALTITUDE", font=("Rosewood Std Regular", 30), fg='#bc951a', command=self.clickAltButton)
        self.humbutton=Button(win, text="HUMIDITY", font=("Rosewood Std Regular", 30), fg='#bc951a', command=self.clickHumButton)
        self.co2button=Button(win, text="CO2", font=("Rosewood Std Regular", 30), fg='#bc951a', command=self.clickCO2Button)
        self.habitabilitybutton=Button(win, text="HABITABILITY", font=("Rosewood Std Regular", 30), fg='#bc951a', command=self.clickHabButton)
        
        self.menulabel.place(x=800, y=50)
        self.tempbutton.place(x=120, y=300)
        self.tempbutton.configure(width=15, height=3)
        self.pressbutton.place(x=700, y=300)
        self.pressbutton.configure(width=15, height=3)
        self.altbutton.place(x=1280, y=300)
        self.altbutton.configure(width=15, height=3)
        self.humbutton.place(x=120, y=600)
        self.humbutton.configure(width=15, height=3)
        self.co2button.place(x=700, y=600)
        self.co2button.configure(width=15, height=3)
        self.habitabilitybutton.place(x=1280, y=600)
        self.habitabilitybutton.configure(width=15, height=3)
  
    def clickTempButton(self):
        plot_temp()
    
    def clickPressButton(self):
        plot_press()
    
    def clickAltButton(self):
        plot_alt()
    
    def clickHumButton(self):
        plot_hum()
    
    def clickCO2Button(self):
        plot_co2()
    
    def clickHabButton(self):
        habitability_check()
         
root = Tk()
root.wm_title("Orion Cansat 2023")
root.geometry("400x200")
root.configure(bg= '#002B36')
root.mainloop()