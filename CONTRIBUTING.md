## Flujo de Trabajo para Contribuir

1. **Crea una rama** para tu feature/fix:

```bash
git checkout -b feature/mi-nueva-funcionalidad
```

2. **Haz tus cambios** y asegúrate de:

   - Seguir el estilo de código existente
   - Agregar comentarios cuando sea necesario
   - Probar tus cambios localmente

3. **Commit** tus cambios:

```bash
git add .
git commit -m "feat: descripción clara de tu cambio"
```

Formato de commits sugerido:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan la lógica)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Tareas de mantenimiento

4. **Push** a tu fork:

```bash
git push origin feature/mi-nueva-funcionalidad
```

5. **Crea un Pull Request** en GitHub