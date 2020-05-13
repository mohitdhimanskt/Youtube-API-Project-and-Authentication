const CLIENT_ID = 'YOUR_CLIENT_ID';
const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');
 
const defaultChannel = 'techguyweb';

channelForm.addEventListener('sumbit',e =>{
e.preventDefault();
const channel = channelInput.value;
getChannel(channel);
});