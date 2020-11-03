
import HOMES from '../../data/dummy-data';


const initialState ={
    availableNews : HOMES,
    deshNews:HOMES.filter(cat=>cat.category ==='desh'),
    bicharNews:HOMES.filter(cat=>cat.category ==='bichar'),
    arthaNews:HOMES.filter(cat=>cat.category ==='artha'),
    chandragiriNews:HOMES.filter(cat=>cat.category ==='chandragiri'),
    bektiBisesNews:HOMES.filter(cat=>cat.category ==='bektiBises'),
    bideshNews:HOMES.filter(cat=>cat.category ==='bidesh'),
    manoranjanNews:HOMES.filter(cat=>cat.category ==='manoranjan'),
    khelkudNews:HOMES.filter(cat=>cat.category ==='khelkud'),
    annayaNews:HOMES.filter(cat=>cat.category ==='anne'),
};

export default(state = initialState,action) =>{
    switch(action.type){
        
    }
    return state;
}