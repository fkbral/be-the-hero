# Features
- 😊 NGO signup
- 🆘 Incident report registration with needed funds
- 🤝 Contact NGOs via email or whatsapp and donate

## Web App
![Be The Hero web](./_captures/web.gif)

## iOS/Android App
<p align="center">
  <img src="./_captures/mobile.gif" alt="Be The Hero mobile">
</p>

# Running Locally

## Starting Backend
```
cd backend && yarn
yarn dev
```

## Web interface
```
cd frontend && yarn
yarn start
```
Access http://localhost:3000

## Mobile

### iOS
```
cd mobile && yarn
npx pod-install ios
yarn ios
```

### Android
```
cd mobile && yarn
yarn android
```
Access http://localhost:19002 and choose target device (simulator or physical device)