import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { LinksSectionComponent } from './links-section/links-section.component';
import { SocialLinksComponent } from './social-links/social-links.component';


@NgModule({
  declarations: [
    FooterComponent,
    NewsletterComponent,
    ContactInfoComponent,
    LinksSectionComponent,
    SocialLinksComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
