import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  orderConfig: object[] = [
    { title: 'Подтверждение заказа', link: 'order-apply' },
    { title: 'Отмена заказа', link: 'order-cancel' },
    { title: 'Возврат средств', link: 'order-return-currency' },
    { title: 'Незавершённый заказ', link: 'order-not-completion' },
    { title: 'Статус доставки товара', link: 'order-status-delivery' },
  ];

  accountConfig: object[] = [
    { title: 'Приветствие при регистрации', link: 'account-salute-registration' },
    { title: 'Сброс пароля', link: 'account-refresh-password' },
    { title: 'Подтверждение EMAIL', link: 'account-apply-email' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
