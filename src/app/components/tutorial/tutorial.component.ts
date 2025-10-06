import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  template: `
    <div class="tutorial-container">
      <h1 class="tutorial-title">Guía de Uso de la Aplicación</h1>
      <div class="wizard">
        <div class="wizard-steps">
          <div
            *ngFor="let step of steps; let i = index"
            class="wizard-step"
            [class.active]="i === currentStep"
            (click)="goToStep(i)"
          >
            <span class="step-number">{{ i + 1 }}</span>
            <span class="step-title">{{ step.title }}</span>
          </div>
        </div>
        <div class="wizard-content">
          <h2>{{ steps[currentStep].title }}</h2>
          <p>{{ steps[currentStep].description }}</p>
        </div>
        <div class="wizard-actions">
          <button
            class="wizard-btn"
            [disabled]="currentStep === 0"
            (click)="prevStep()"
          >
            Atrás
          </button>
          <button
            class="wizard-btn primary"
            [disabled]="currentStep === steps.length - 1"
            (click)="nextStep()"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tutorial-container {
      max-width: 700px;
      margin: 40px auto;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      padding: 32px 40px;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    .tutorial-title {
      text-align: center;
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 32px;
      color: #2d3748;
    }
    .wizard {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .wizard-steps {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .wizard-step {
      flex: 1;
      text-align: center;
      cursor: pointer;
      padding: 12px 0;
      border-bottom: 3px solid transparent;
      transition: border-color 0.2s, color 0.2s;
      color: #718096;
      font-weight: 500;
      position: relative;
    }
    .wizard-step.active {
      color: #3182ce;
      border-bottom: 3px solid #3182ce;
      background: linear-gradient(90deg, #ebf8ff 0%, #fff 100%);
    }
    .step-number {
      display: block;
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .step-title {
      font-size: 1rem;
    }
    .wizard-content {
      background: #f7fafc;
      border-radius: 8px;
      padding: 24px;
      min-height: 120px;
      box-shadow: 0 2px 8px rgba(49,130,206,0.05);
    }
    .wizard-content h2 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 12px;
      color: #2b6cb0;
    }
    .wizard-content p {
      font-size: 1.05rem;
      color: #4a5568;
      margin: 0;
    }
    .wizard-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 16px;
    }
    .wizard-btn {
      padding: 8px 24px;
      font-size: 1rem;
      border-radius: 6px;
      border: none;
      background: #e2e8f0;
      color: #2d3748;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }
    .wizard-btn.primary {
      background: #3182ce;
      color: #fff;
    }
    .wizard-btn:disabled {
      background: #cbd5e1;
      color: #a0aec0;
      cursor: not-allowed;
    }
    @media (max-width: 600px) {
      .tutorial-container {
        padding: 16px 8px;
      }
      .wizard-content {
        padding: 12px;
      }
      .wizard-steps {
        flex-direction: column;
        gap: 8px;
      }
    }
  `]
})
export class TutorialComponent {
  steps = [
    {
      title: 'Introducción',
      description: 'En este tutorial aprenderás a configurar y utilizar la aplicación paso a paso.'
    },
    {
      title: 'Inicio de sesión',
      description: 'Accede a la aplicación ingresando tu usuario y contraseña en la pantalla de login.'
    },
    {
      title: 'Configuración de datos básicos',
      description: 'Configura precios, stock y horarios para adaptar la aplicación a tus necesidades.'
    },
    {
      title: 'Gestión de reservas',
      description: 'Realiza reservas, cancelaciones y confirmaciones de manera sencilla y rápida.'
    },
    {
      title: 'Visualización de reportes',
      description: 'Consulta reportes detallados para analizar el desempeño y la actividad de tu negocio.'
    },
    {
      title: 'Rol de limpieza',
      description: 'Gestiona las tareas de limpieza y asigna roles para mantener el orden y la higiene.'
    }
  ];
  currentStep = 0;

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(index: number) {
    this.currentStep = index;
  }
}