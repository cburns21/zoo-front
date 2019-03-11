<template>
    <form v-on:submit="this.addNewCase" name="myForm" method="post">
        <div class="form-row">
            <div class="col-md-4 mb-3">
            <label for="validationServer01">Type</label>
            <input type="text"  class="form-control" id="validationServer01" placeholder="Type"  required>
            </div>
            <div class="col-md-4 mb-3">
            <label for="validationServer02">Description</label>
            <input type="text" class="form-control" id="validationServer01" placeholder="Description"   required>
            <div class="form-group">
                <label for="exampleFormControlSelect1" >Select District</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <input required>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <!-- <option>Tundratown</option>
                <option>Meadowlands</option>
                <option>Rainforest District</option>
                <option>Canal District</option>
                <option>Savana Central</option>
                <option>Sahara Square</option>
                <option>Outback Island</option>
                <option>Little Rodentia</option> -->
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Select Cop</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <!-- <option>Judy Hopps</option>
                <option>Nick Wilde</option>
                <option>Chief Bogo</option>
                <option>Benjamin Clawhauser</option> -->
                </select>
            </div>
            </div>
            
        </div> 
        <button type="submit" class="btn btn-primary">Add Case</button>
</form>
</template>

<script>
export default {
    methods: {
        addNewCase: function (event) {
            fetch('http://localhost:3000/cases'), {
                method: "POST",
                body: JSON.stringify({
                    "description": event.target[1].value,
                    "type": event.target[0].value,
                    "district_id": event.target[2].value,
                    "cop_id": event.target[3].value
                    
            })
            }
        }
    }
}
</script>

<style scoped>
    button {
        background-color: navy;
    }
    form {

    }
</style>
