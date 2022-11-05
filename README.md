# NextJS Static Template

A NextJS 12 typescript template configurable to easily deploy on AWS **_- NO SERVERLESS NEEDED_**.

# AWS Deployment Setup

- Create a new s3 bucket with no public access

- Create a Cloudfront distribution, eventually request an https certificate, remember to set the Default root object as `index.html` and the origin access with a Sign Request Control Setting.

- Set the bucket policy with the value copied from the origin tab.

- Create a specific Policy named `$project`\_`$environment`\_github_actions_deployment with the following Statement.

```
  [
    {
        "Sid": "ListObjectsInBucket",
        "Effect": "Allow",
        "Action": "s3:ListBucket",
        "Resource": "arn:aws:s3:::`${bucketName}`"
    },
    {
        "Sid": "AllObjectActions",
        "Effect": "Allow",
        "Action": "s3:*Object",
        "Resource": "arn:aws:s3:::`${bucketName}`/*"
    },
    {
        "Sid": "InvalidateCF",
        "Effect": "Allow",
        "Action": "cloudfront:CreateInvalidation",
        "Resource": "*"
    }
  ]
```

- Create a new user (programmatic access) named `$project`\_`$environment`\_github_action, then set the secret into github repository secret section.
  | Variable | Description |
  | :--- | ---: |
  | AWS_KEY | The Production AWS User Key |
  | AWS_SECRET | The Production AWS User Secret |
  | DEV_AWS_KEY | The Development AWS User Key |
  | DEV_AWS_SECRET | The Development AWS User Secret |

- Set the variables into the corresponding .env.`$environment` file.
  | Variable | Description | Example |
  | :--- | :----: | ---: |
  | AWS_BUCKET_NAME | The actual bucket name | sample-bucket-name |
  | AWS_REGION | The default AWS region | eu-west-1 |
  | AWS_CLOUDFRONT_DISTRIBUTION_ID | The CF distribution id | **\*\***\*\***\*\*** |

- Repeat the setup for all the environments you do need (**_Follow the dotenv standard_**)
