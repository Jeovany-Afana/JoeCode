<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="form.css">
    <title>Formulaire d'inscription</title>
</head>
<body>
<header>
  <h1 id="target"></h1>
</header>
   <form action="verifForm.php" method="POST">
        <label for="surname">Surname: </label>
        <input type="text" name="surname" id="surname" placeholder="Please enter your surname"><br><br>

        <label for="firstname">First name</label>
        <input type="text" name="firstname" id="firstname" placeholder="Please enter your first name"> <br><br>
         
         <label for="sex"></label>
         <label for="male">Male</label>
         <input type="radio"  name="sex" id="male" value="male">
         <label for="female">Female</label>
         <input type="radio" name="sex" id="male" value="female">
         
   </form>
  <script src="anim-title.js"></script>
</body>
</html>