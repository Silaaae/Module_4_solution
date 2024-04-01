var names = new Array();
names[0] = "Yacob";
names[1] = "Jonas";
names[2] = "Jasmine";
names[3] = "Joshua";
names[4] = "Philip";
names[5] = "Fiona";
names[6] = "Leon";
names[7] = "Patricia";
names[8] = "Lucas";
names[9] = "Jack";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}