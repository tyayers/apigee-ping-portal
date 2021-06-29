sudo docker build -t local/apigeepingservice .
sudo docker tag local/apigeepingservice eu.gcr.io/$1/apigeepingservice
sudo docker push eu.gcr.io/$1/apigeepingservice

gcloud run deploy apigeepingservice --image eu.gcr.io/$1/apigeepingservice --platform managed --project $1 --region europe-west1 --allow-unauthenticated
