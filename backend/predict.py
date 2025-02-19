import joblib
import numpy as np
import pandas as pd

def predict(data:dict):
    rfc = joblib.load('./models/rfc.h5')
    scaler = joblib.load('encoders/scaler.sav')
    statencoder = joblib.load('encoders/stateencoder.sav')
    data['state'] = statencoder.transform([data['state']])[0]
    nparr = np.array([list(data.values())],dtype=float)
    print(nparr)
    scaled = scaler.transform(nparr)
    print(scaled)
    result = rfc.predict(scaled)
    
    return result[0]
    
    



