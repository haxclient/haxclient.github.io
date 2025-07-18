const phoneInput = document.getElementById('phone');
const phoneDiv = document.getElementById('phone-div');

phoneInput.addEventListener('click', () => {
    navigator.clipboard.writeText(phoneInput.value);
    phoneDiv.innerHTML = `<i class="fa-solid fa-phone fa-xs"></i> Phone: <input type="button" id="phone" value="0333726536"> Copied!`;
    setTimeout(() => {phoneDiv.innerHTML = `<i class="fa-solid fa-phone fa-xs"></i> Phone: <input type="button" id="phone" value="0333726536">`;}, 2000);
});

const discordInput = document.getElementById('discord');
const discordDiv = document.getElementById('discord-div');

discordInput.addEventListener('click', () => {
    navigator.clipboard.writeText(discordInput.value);
    discordDiv.innerHTML = `<i class="fa-brands fa-discord fa-xs"></i> Discord: <input type="button" id="discord" value="n0th1ngxd#0609"> Copied!`;
    setTimeout(() => {discordDiv.innerHTML = `<i class="fa-brands fa-discord fa-xs"></i> Discord: <input type="button" id="discord" value="n0th1ngxd#0609">`;}, 2000);
});

function colorText(str,phase)
{
    if (phase == undefined) phase = 0;
    center = 128;
    width = 127;
    frequency = Math.PI*2/str.length;
    for (var i = 0; i < str.length; ++i)
    {
        red   = Math.sin(frequency*i+2+phase) * width + center;
        green = Math.sin(frequency*i+0+phase) * width + center;
        blue  = Math.sin(frequency*i+4+phase) * width + center;
        document.write( '<font style="color:' + RGB2Color(red,green,blue) + '">' + str.substr(i,1) + '</font>');
    }
}