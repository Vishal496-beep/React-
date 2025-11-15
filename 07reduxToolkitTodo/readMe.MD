# Redux Toolkit ~

# har ek application m ek hi 'store' hota h jise kehte h single store of truth ~ Redux toolkit 


# hmesha reducers name use krna h reducer m nd jo bhi elements / methods create honge unme props m hmesha (state, action )pass krna h  
# state k ander initial state 
# action k ander = action.payload


# state m jo initial value hogi woh or action m jo value change hokar show hogi woh 
# pattern is first ---- 
# 1 ~ create a store (configureStore)
# 2 ~ create reducers using slice 
     # first we need name 
     # second we need initial state that is current state 
     # third is reducers
# 3 ~ use (useDispatch)
# 4 ~ use (selectDispatch)


