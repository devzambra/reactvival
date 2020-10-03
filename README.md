# Reactvival: The React survival game

Reactvival is a React web based game where you as the player try to survive as long as you can. To acomplish that, you can spend resources, money and energy to perform different actions and get items that will help you extend your survival time.

## Instructions

#### Stats

You begin with the following stats:

* **Health**: 10 / 10
* **Energy**: 50 / 50
* **Food**: 10 / 10
* **Water**: 10 / 10
* **Resources**: 20
* **Money**: 100

If your **Health** reaches 0, you loose.

To avoid that, you can spend **Energy** to explore, **Resources** to craft or **Money** to buy items.

Then, you can use those items to get back **Resources**, **Energy**, **Money**, **Food** or **Water**.

#### Main loop

* Each **5 seconds** you loose **2 Energy**.
* Each **20 seconds** you loose **1-3 Food** and **1-3 Water**
    * If you have **0 Food**, you loose **1 Health**
    * If you have **0 Water**, you loose **1 Health**
* Each **30 seconds** you loose **1 Health** and you get **40 Money**
* Each **60 seconds** you get **15 Resources** and **10 Energy**


#### How to win

You cannot win, but you can try  to survive the longest time possible. Give it a try!

### Live version

You can find a live running version of this project in: [Reactvival](https://reactvival.devzambra.es)


