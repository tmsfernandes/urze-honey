import { Component } from '@angular/core';

import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { OriginSection } from '../../components/origin-section/origin-section';
import { Features } from '../../components/features/features';
import { Products } from '../../components/products/products';
import { GalleryStrip } from '../../components/gallery-strip/gallery-strip';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Hero,
    OriginSection,
    Features,
    Products,
    GalleryStrip,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}