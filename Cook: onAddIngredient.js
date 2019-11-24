

onAddIngredient = async () => {
       //Pull in the user input (parameters)
        const {name, quantity, specialty, specialRequest} = this.state;
       //Authenticate User ==> Just as a safety check
        if (res.user.uid !== null || res.user.uid !== undefined) {
           //Connect to database: Ingreidents Table 
            await firebase.database().ref(`/ingredients/${res.ingredient.iid}`)
            //Create a new ingredient with following attributes
            .set({
                name: name,
                quantity: quantity,
                specialty: specialty,
                specialRequest: specialRequest
            }); 
        }.catch( (error) => {
               //Handle errors
                console.log(error)
        });
    }





