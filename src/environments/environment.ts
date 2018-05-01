// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://hujihackathon.herokuapp.com/',
  cloudinary_cloud_name: 'dlww64nbo',
  cloudinary_preset: 'preset',
  // myId :Math.round(Math.random() * 1000000) 
  myId :'123'
};
