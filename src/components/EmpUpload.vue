<template>
	
  <div class="hello">
    <!--<form action="Http://localhost:8081/upload" method="post" enctype="multipart/form-data">
    	<input type="file" name="file" />
    	<input type="submit" class="btn btn-default" value="上传" />
    </form>-->
    test
    
    <input type="text" name="username" id="username" />
    <input type="file" name="file" />
   	<input type="button" id="username" class="btn btn-default" v-on:click="upload" value="上传" />
  </div>
</template>

<script>
export default {
  name: 'EmpUpload',
  methods:{
  	upload:function(){
  		var formdata = new FormData();
  		formdata.append("file",document.querySelector("input[name=file]").files[0]);
  		formdata.append("username",document.getElementById("username").value);
  		this.$http.post("http://localhost:8081/upload",formdata,{
  			headers:{
  				"Content-type":"multipart/form-data"
  			}
  		}).then(
  			function(result){
  				alert(result.bodyText);
  				
  			},
  			function(error){
  				alert(error.body.message);
  			}
  		)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
