import { Component, inject, OnInit } from '@angular/core';
import { HttpPracticeService } from '../../services/http-practice.service';
import { User } from '../../practice-mock-data';
import { PresentationComponent } from '../presentation/presentation.component';


@Component({
  selector: 'app-container',
  imports: [PresentationComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit {
  httpService = inject(HttpPracticeService)
  userList: User[] = []

  ngOnInit(): void {
    this.httpService.getUserList().subscribe(payload =>
      this.userList = payload
    )
  }

}
