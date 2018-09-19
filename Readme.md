
# ipm package: TensorFlow-Object-Detection

## Overview

This IPM lets you upload a WebCam stream to YOLO(You Only Look Once) Object Detection Model which is running on the adapter(having the tensorflow model) 

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup
The host machine should have a miniconda/anaconda installed with python 3.5 to run the YOLO model(tensorflow).

(Directions to install miniconda)
wget https://repo.continuum.io/miniconda/Miniconda3-3.7.0-Linux-x86_64.sh -O ~/miniconda.sh
bash ~/miniconda.sh -b -p $HOME/miniconda
export PATH="$HOME/miniconda/bin:$PATH"

Use the included environment.yml file to get the required python libraries/packages.
Use the Terminal or an Anaconda Prompt for the following steps.

conda env create -f environment.yml
The first line of the yml file sets the new environment’s name.

## Usage

## API

