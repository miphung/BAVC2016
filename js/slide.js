var num=1
img1 = new Image ()
img1.src = "information.gif"
img2 = new Image ()
img2.src = "interference.gif"
img3 = new Image ()
img3.src = "message.gif"
img4 = new Image ()
img4.src = "nervous.gif" 

text1 = "Text for Picture One"
text2 = "Text for Picture Two"
text3 = "Text for Picture Three"
text4 = "Text for Picture Four"

function slideshowUp()
{
num=num+1
if (num==5)
{num=1}
document.mypic.src=eval("img"+num+".src")
document.joe.burns.value=eval("text"+num)
}

function slideshowBack()
{
num=num-1
if (num==0)
{num=4}
document.mypic.src=eval("img"+num+".src")
document.joe.burns.value=eval("text"+num)
}

</SCRIPT>

<!-- The Image and Form Codes are Below --> 

<CENTER>
<IMG SRC="information.gif" NAME="mypic" BORDER=0 HEIGHT="100" WIDTH="100">
<p>

<FORM NAME="joe">
<INPUT TYPE="text" WIDTH="100" NAME="burns" VALUE="Text For Picture One">
</FORM>

<A HREF="JavaScript:slideshowBack()"> Back</A>

<A HREF="JavaScript:slideshowUp()"> Next</A> 

