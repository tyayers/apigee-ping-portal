npm run build
rm -r -f "../devportalservice/public"
mkdir "../devportalservice/public"
cp -r "build/." "../devportalservice/public"
