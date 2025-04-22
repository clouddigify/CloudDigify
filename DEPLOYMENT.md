# CloudDigify Deployment Guide

This guide covers the steps to deploy the CloudDigify website to Vercel and connect it to your custom domain from Hostinger.

## GitHub Setup

1. Make sure your repository is on GitHub
2. Ensure all configuration files are in place:
   - `vercel.json` - Vercel configuration
   - `.env.production` - Environment variables

## Vercel Deployment

1. Sign up/in to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure the project:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`
   - Environment Variables: Add any additional environment variables needed

4. Click 'Deploy'

## Custom Domain Setup

### 1. Add Domain in Vercel

1. Go to your project settings in Vercel
2. Navigate to 'Domains'
3. Add your domain: `clouddigify.com`
4. Also add: `www.clouddigify.com`

### 2. Configure DNS in Hostinger

Option 1: Nameserver Method (Recommended)

1. Get the Vercel nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
2. In Hostinger, go to your domain settings and set these nameservers

Option 2: DNS Records Method

1. In Hostinger DNS settings, add the following records:
   - Type: A, Name: @, Value: [Vercel IP provided in the Vercel dashboard]
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com.

### 3. Verify Domain

1. Wait for DNS propagation (can take up to 48 hours, but often much faster)
2. Verify the domain in Vercel dashboard

## SSL Certificate

Vercel will automatically provision and manage SSL certificates for your domain.

## Testing

1. Test your site at both `https://clouddigify.com` and `https://www.clouddigify.com`
2. Check that all routes are working properly
3. Verify the SSL certificate is valid

## Troubleshooting

If your site shows "URL Restricted" or other errors:

1. Check the Content Security Policy in `vercel.json`
2. Make sure all asset URLs are relative or using the same domain
3. Remove any external image URLs or replace them with icons
4. Verify DNS configuration is correct
5. Check Vercel deployment logs for any build errors