import { Component, signal } from '@angular/core';
import { PrimengModule } from './primeng/primeng-module';
import { Input } from "./components/input/input";
import { Signal } from "./components/signal/signal";

@Component({
  imports: [PrimengModule, Input, Signal],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('prueba');
}
