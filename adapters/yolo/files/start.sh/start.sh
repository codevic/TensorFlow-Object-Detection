#!/bin/bash

source activate aaron
cd yoloFolder/darkflow
#nohup python try_one.py &
#echo "started in background"
#nohup python try_one.py > my.log 2>&1 &
python try_one.py &> myscript.log
echo $! > save_pid.txt
echo "python script for yolov2, now running in background with pid saved"