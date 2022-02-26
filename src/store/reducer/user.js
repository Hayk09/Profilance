import { v4 as uuidv4 } from 'uuid';
const initialState = {
    news: [
        { id: uuidv4(), title: 'Sputnik Армения', description: 'Путин обсудил с Пашиняном ситуацию вокруг Нагорного Карабаха', avatar: "https://cdnn1.img.armeniasputnik.am/img/2344/77/23447704_0:0:1600:901_1920x0_80_0_0_8a2da7a23ca0fa2865a68770dec2ef5c.jpg.webp", activity: true },
        { id: uuidv4(), title: 'Yerevan', description: 'Стало известно, куда россияне собираются поехать на отдых весной', avatar: "https://cdnn1.img.armeniasputnik.am/img/07e5/0a/08/34077946_0:33:1600:934_1920x0_80_0_0_1308eacfb7e5a1339b46c0de372f2260.jpg.webp", activity: true },
        { id: uuidv4(), title: 'Новости ', description: 'Текст обращения Владимира Путина к россиянам и соотечественникам на Украине', avatar: "https://cdnn1.img.armeniasputnik.am/img/07e6/02/16/38973609_0:104:1600:1004_1920x0_80_0_0_8377f92321f5aa05ebc5041dc95798b1.jpg", activity: true },
        { id: uuidv4(), title: 'Sputnik Армения', description: 'Путин обсудил с Пашиняном ситуацию вокруг Нагорного Карабаха', avatar: "https://gdb.rferl.org/6A1A0164-2FB3-42FD-9602-49C8E71E06B3_w1023_r1_s.jpg", activity: true },
        { id: uuidv4(), title: 'Azatutyun', description: 'Стало известно, куда россияне собираются поехать на отдых весной', avatar: "https://gdb.rferl.org/995ac546-4469-4008-918c-3c292902f138_w1023_r1_s.jpg", activity: true },
        { id: uuidv4(), title: 'Armenia Новости ', description: 'Текст обращения Владимира Путина к россиянам и соотечественникам на Украине', avatar: "https://gdb.rferl.org/1F340E23-B7F0-48BC-AF66-D254C7ABD4B0_w1023_r1_s.jpg", activity: true }
    ]

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT': {
            console.log(action);
            state.news.push(action.payload)
          
            return state
        }
       
        case 'DELETE': {
            state.news =  Object.assign([],state?.news.filter((t)=> t.id !== action.payload.id)) 
            return state            
        }
        case 'CREATE': {
            state.news.push(action.payload)
             state.news = Object.assign([],state?.news.map((e) => ({
                ...e,
                activity: action.payload.id === e.id ? !e.activity : true
                
            })) )
      
            return state        
            
        }
        default: return state
    }
}

