

onAddIngredient = async () => {
        const {name, quantity, specialty, specialRequest} = this.state;
        if (res.user.uid !== null || res.user.uid !== undefined) {
            await firebase.database().ref(`/ingredients/${res.ingredient.iid}`)
            .set({
                name: name,
                quantity: quantity,
                specialty: specialty,
                specialRequest: specialRequest
            }); 
        }.catch( (error) => {
                console.log(error)
        });
    }





